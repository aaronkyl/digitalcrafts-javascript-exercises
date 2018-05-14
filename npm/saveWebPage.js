var request = require('request');
var fs = require('fs');

function saveWebPage(url, filename, callback) {
  request.get(url, function(err, response, html) {
    if (err) {
      callback(err);
      return;
    }
    fs.writeFile(filename, html, function(err) {
      if (err) {
        callback(err);
        return;
      }
      callback(null);
    });
  });
}

// this exports the entire file and so in whatever file you're requiring this one from,
// you'll have to access this one function with <filename>.<functionname> like so
// saveWebPage.saveWebPage
// exports.saveWebPage = saveWebPage;

// using this export terminology means we can access the formula directly in our requiring
// file instead of having to reference this module name in the call. Can only export one
// thing from this module when using this terminology, though.
module.exports = saveWebPage;