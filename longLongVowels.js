function longLongVowels (text) {
    var textArray = text.split('');
    var resultArray = [];
    textArray.forEach(function (letter, index) {
        if (letter == textArray[index-1]) {
            for (let i = 0; i < 4; i++) {
                resultArray.push(letter);
            }
        } else {
            resultArray.push(letter);
        }
    });
    return(resultArray.join(''));
}

console.log(longLongVowels("Cheese"));
console.log(longLongVowels("Man"));
console.log(longLongVowels("Moon"));