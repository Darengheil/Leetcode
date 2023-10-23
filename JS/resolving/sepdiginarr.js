/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.toString().split('').filter(item => item !== ',').map(Number);
};

separateDigits([13,25,83,77]);