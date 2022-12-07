# Funny Words

Package that takes a sentence and shuffles its words with fixed first and last letter of the word. It was inspired by the following:

    Aoccdrnig to rscheearch at Cmabrigde uinervtisy, it deosn’t mttaer waht oredr the ltteers in a wrod are, the olny iprmoetnt tihng is taht the frist and lsat ltteres are at the rghit pclae. The rset can be a tatol mses and you can sitll raed it wouthit a porbelm. Tihs is bcuseae we do not raed ervey lteter by it slef but the wrod as a wlohe.

As a note to that text: its legitimacy has been crushed to dust [Read this to know how](http://awesci.com/cambridge-university-says-spelling-does-not-matter/). Also my package confirmed it's actually not that simple to read with different text.

## Install

```bash
npm install funny-words
```

## How to use

```js
var funnyWords = require('funny-words');

console.log(funnyWords("Don't worry, be happy!"));
// Output could be something "D'not wrory, be hppay!"
```

## Test

```
npm test
```

## Author

Jernej Sila - jernej.sila@gmail.com

## License

MIT
