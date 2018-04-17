function evenNumbers (nums) {
    return nums.filter( function (num) {
        return !(num % 2);
    });
}

console.log(evenNumbers([1,2,3,0,-5,-6]));