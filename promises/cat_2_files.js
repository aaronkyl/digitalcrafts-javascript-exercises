var fsp = require('fs-promise');
var fs = require('fs');

var file1promise = fsp.readFile('text1.txt');
var file2promise = fsp.readFile('text2.txt');

Promise.all([file1promise, file2promise])
    .then(function(texts) {
        return texts[0] + '\n\n' + texts[1];
    })
    .then(function(concatTexts) {
        fsp.writeFile('concat.txt', concatTexts);
    })
    .catch(function(error) {
        console.log("ERROR: ", error);
    })