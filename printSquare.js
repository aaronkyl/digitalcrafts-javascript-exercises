function printSquare(size) {
    for (let row = 0; row < size; row++) {
        let printedRow = '';
        for (let col = 0; col < size; col++) {
            printedRow += '*';
        }
        console.log(printedRow);
    }
    return;
}

printSquare(5);