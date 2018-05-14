var request = require('request');
var cheerio = require('cheerio');

var url = "https://www.npmjs.com";

request.get(url, function (error, response, html) {
    if (error) {
        console.log(error);
        return;
    }
    // load cheerio
    const $ = cheerio.load(html);
    // grab most installed packages
    var packages = $('#features-collaboration-pane .glxxxl h3 a').contents();
    // ititialize names array
    var packageNames = [];
    // cycle through dictionary and grab each package's name
    for (var i =0; i < packages.length; i++) {
        packageNames.push(packages[i]['data']);
    }
    // print names array
    console.log("Package names: ", packageNames);
});