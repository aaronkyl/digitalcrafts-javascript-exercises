function leetSpeak(plaintext) {
    var leetSubstitutions = {
        'a': '4',
        'e': '3',
        'g': '6',
        'i': '1',
        'o': '0',
        's': '5',
        't': '7'
    };
    var plaintextArray = plaintext.split('');
    plaintextArray.forEach( function (letter, index) {
        if (leetSubstitutions.hasOwnProperty(letter.toLowerCase())) {
            plaintextArray[index] = leetSubstitutions[letter.toLowerCase()];
        } else {
            plaintextArray[index] = plaintextArray[index].toLowerCase();
        }
    });
    return plaintextArray.join('');
}

console.log(leetSpeak("Hello World"));
console.log(leetSpeak("Aaron eats eggs and toast"));