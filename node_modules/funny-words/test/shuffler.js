var assert = require('assert'),
    shuffler = require('../lib/shuffler');

describe('shuffler', function() {
    it('should return text with the same length', function() {
        var originalText = "Today was a great day and we should celebrate it",
            shuffledText = shuffler(originalText);

        assert.equal(shuffledText.length, originalText.length)
    });

    it('shuffles chars in word with fixed first and last char', function() {
        var originalText = "Today was a great day and we should celebrate it",
            shuffledText = shuffler(originalText),
            originalTextWords = originalText.split(' '),
            shuffledTextWords = shuffledText.split(' ');

        originalTextWords.forEach(function(word, i) {
            assert.equal(shuffledTextWords[i].charAt(0), word.charAt(0));
            assert.equal(shuffledTextWords[i].slice(-1), word.slice(-1));
        })
    });
    
    it('should work with punctuations present', function() {
        var originalText = "Today was a great day, we should celebrate it. Release the kraken!!",
            shuffledText = shuffler(originalText),
            shuffledTextWords = shuffledText.split(' ');

        assert.equal(shuffledTextWords[4], 'day,');
        assert.equal(shuffledTextWords[8], 'it.');
        assert.equal(shuffledTextWords[11].slice(-3), 'n!!')
    });
});
