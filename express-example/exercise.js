var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello, world!');
});

app.get('/cats', function(request, response) {
    response.send('Meow');
});

app.get('/dogs', function(request, response) {
    response.send('Woof');
});

app.get('/cats_and_dogs', function(request, response) {
    response.send('Living together');
});

app.get('/greet/:name', function(request, response) {
    var name = request.params.name;
    response.send(`Hello, ${name}!`);
});

app.get('/year', function(request, response) {
    var age = request.query.age;
    var today = new Date();
    var year = today.getFullYear();
    var DOB = year - age;
    response.send(`You were born in ${DOB}.`);
});

app.listen(8080, function() {
    console.log("Listening on port 8080");
});