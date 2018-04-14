function cipher(plaintext, key) {
    let ciphertext = [];
    let plaintextArray = plaintext.split('');
    plaintextArray.forEach( function (char) {
        // test if alpha character
        if (char.toUpperCase() != char.toLowerCase()) {
            // test if uppercase
            if (char == char.toUpperCase()) {
                var a = 'A';
            } else {
                var a = 'a';
            }
            ciphertext.push(String.fromCharCode((((char.charCodeAt(0) - a.charCodeAt(0)) + key) % 26) + a.charCodeAt(0)));
        } else {
            ciphertext.push(char);
        }
    });
    return ciphertext.join('');
}

console.log(cipher("Hello 24 human People", 1));