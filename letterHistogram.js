function letterHistogram (text) {
    var tally = {};
    for (let letter = 0, l = text.length; letter < l; letter++) {
        if (tally.hasOwnProperty(text[letter])) {
            tally[text[letter].toLowerCase()]++;
        } else {
            tally[text[letter].toLowerCase()] = 1;
        }
    }
    return tally;
}

console.log(letterHistogram("bAnanas"));