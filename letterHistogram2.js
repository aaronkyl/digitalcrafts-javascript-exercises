function letterHistogram (text) {
    var tally = {};
    for (let letter = 0, l = text.length; letter < l; letter++) {
        if (tally.hasOwnProperty(text[letter])) {
            tally[text[letter].toLowerCase()]++;
        } else {
            tally[text[letter].toLowerCase()] = 1;
        }
    }
    let tallySorted = Object.keys(tally).sort(function(a,b){return tally[b]-tally[a]});
    return tallySorted.slice(0, 2).join(', ');
}

console.log(letterHistogram("bAnanas"));
console.log(letterHistogram("aabbbcccccdd"));