function squareTheNumbers(nums) {
    return nums.map(function(num) {
        return num * num;
    });
}

console.log(squareTheNumbers([1,2,3]));