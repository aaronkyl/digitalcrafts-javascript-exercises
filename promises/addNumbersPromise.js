function addNumbers(x, y) {
    var promise = new Promise(function(resolve, reject) {
        try {
            if (x == '' || isNaN(x) || y == '' || isNaN(y)) throw "Only numbers can be summed!";
            return resolve(x + y);
        }
        catch (error) {
            return reject(error);
        }
    });
    return promise;
}

addNumbers('t', 6)
    .then(function (answer) {
        console.log("SUM: ", answer);
    })
    .catch(function (error) {
        console.log(error);
    });
  
addNumbers(5, 6)
    .then(function (answer) {
        console.log("SUM: ", answer);
    })
    .catch(function (error) {
        console.log(error);
    });