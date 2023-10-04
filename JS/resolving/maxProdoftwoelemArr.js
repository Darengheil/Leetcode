/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums){
    let a = Math.max(...nums)-1;
    nums.splice(nums.indexOf(Math.max(...nums)),1);
    let b = Math.max(...nums)-1;
    return a*b;
};

maxProduct([3,4,5,2]);