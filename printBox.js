function printBox(width, height) {
    for (let row = 0; row < height; row++) {
        let printedRow = '';
        if (row == 0 || row == height-1) {
            for (let col = 0; col < width; col++) {
                printedRow += '*';
            }
        } else {
            for (let col = 0; col < width; col++) {
                if (col == 0 || col == width-1) {
                    printedRow += '*';
                } else {
                    printedRow += ' ';
                }
            }
        }
        console.log(printedRow);
    }
    return;
}

printBox(7, 4);