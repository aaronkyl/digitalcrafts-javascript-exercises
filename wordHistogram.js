function wordHistogram (text) {
    var tally = {};
    let textArray = text.split(' ');
    for (let word = 0, l = textArray.length; word < l; word++) {
        if (tally.hasOwnProperty(textArray[word])) {
            tally[textArray[word].toLowerCase()]++;
        } else {
            tally[textArray[word].toLowerCase()] = 1;
        }
    }
    return tally;
}

console.log(wordHistogram("To be or not to be"));