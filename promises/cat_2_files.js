var fsp = require('fs-promise');

var file1promise = fsp.readFile('text1.txt');
var file2promise = fsp.readFile('text2.txt');

var listOfFiles = [file1promise, file2promise];

function concatNFiles(listOfFiles, outputFileName) {
    var listOfFilePromises = [];
    for (var i = 0, l = listOfFiles.length; i < l; i++) {
        listOfFilePromises.push(fsp.readFile(listOfFiles[i]));
    }
    
    Promise.all(listOfFilePromises)
        .then(function(fileTexts) {
            var concatText = "";
            for (var i = 0, l = listOfFiles.length; i < l; i++) {
                concatText += (fileTexts[i] + "/n/n");
            }
            return concatText;
        })
        .then(function(concatTexts) {
            fsp.writeFile(outputFileName, concatTexts);
        })
        .catch(function(error) {
            console.log("ERROR: ", error);
        });
}

concatNFiles(listOfFiles, 'concat.txt');