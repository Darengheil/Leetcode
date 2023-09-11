/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sumofElements = nums.reduce((acc, i) => acc + i,0);

    let sumofDigits = nums.toString().replaceAll(',','').split('').reduce((acc, i) => acc + Number(i),0);

    return Math.abs(sumofElements - sumofDigits);
};

differenceOfSum([1,15,6,3]);
differenceOfSum([3,6,15,14,17,12,9,9,15,3,13,5,18,13,18,17,5,14,7,20]);
