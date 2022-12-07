/**
 * Function export.
 *
 * @type {funnyWords}
 */
module.exports = funnyWords;

/**
 * All possible punctuations.
 *
 * @type {string}
 */
var punctuation = '.,?!;:';

/**
 * Shuffles characters of a given text.
 *
 * @param {string} text
 * @returns {string}
 */
var shuffle = function (text) {
    var a = text.split(''),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1)),
            tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join('');
};

/**
 * Shuffles a word by leaving first and last letter (and punctuations if present).
 *
 * @param {string} word
 * @returns {string}
 */
var reorderWordCharacters = function(word) {
    var punctuations = '';
    for (var i = word.length - 1; i >= 0; i--) {
        if (punctuation.indexOf(word[i]) > -1) {
            punctuations = word[i] + punctuations;
            continue;
        }
        word = word.slice(0, i + 1);
        break;
    }

    var start = word[0],
        middle = shuffle(word.slice(1, -1)),
        end = word.length > 1 ? word[word.length - 1] : '';
    
    return start + middle + end + punctuations;
}

/**
 * Splits a given text by space to words,
 * shuffles each word and then joins words back again into text.
 *
 * @param {string} text
 * @returns {string}
 */
function funnyWords(text) {
    return text
        .split(' ')
        .map(reorderWordCharacters)
        .join(' ');
}
