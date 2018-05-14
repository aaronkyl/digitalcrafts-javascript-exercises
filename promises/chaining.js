var fsp = require('fs-promise');
var rp = require('request-promise');

function saveWebPage(url, filename) {
    rp(url)
        .then(function(body) {
            fsp.writeFile(filename, body);
        })
        .catch(function(error) {
            console.log(error);
        });
}

saveWebPage('http://www.google.com', 'google.html');