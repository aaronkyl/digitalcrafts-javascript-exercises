function sum(array) {
    return array.reduce(function (a,b) {
        return a + b;
    });
}

console.log(sum([1,2,3,4,5]));