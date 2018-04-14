function printBanner(bannerText) {
    var bannerWidth = bannerText.length + 4;
    for (let row = 0; row < 3; row++) {
        let printedRow = '';
        if (row != 1) {
            for (let col = 0; col < bannerWidth; col++) {
                printedRow += '*';
            }
        } else {
            printedRow = "* " + bannerText + " *";
        }
        console.log(printedRow);
    }
}

printBanner("Hello World!");