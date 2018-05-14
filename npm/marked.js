var marked = require('marked');
var fs = require('fs');

fs.readFile("markdownText.txt", function(error, buffer) {
    if (error) {
        console.log(error);
        return;
    }
    
    var markdownText = marked(buffer.toString());
    
    fs.writeFile("markdown.html", markdownText, function(error) {
        if (error) {
            console.log(error);
            return;
        }
    });
});