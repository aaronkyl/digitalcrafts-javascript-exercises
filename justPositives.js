function justPositives(nums) {
    return nums.filter( function (n) {
        return n >= 0;
    });
}

var a = [-1, -2, 3, 0];
var b = [-1, -2, -3];
console.log(justPositives(a));
console.log(justPositives(b));