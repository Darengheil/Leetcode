/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    let a = Math.max(...nums);
    let b = Math.min(...nums);

    nums.splice(nums.indexOf(Math.max(...nums)), 1);
    nums.splice(nums.indexOf(Math.min(...nums)), 1);

    let c = Math.max(...nums);
    let d = Math.min(...nums);

    return (a*c)-(b*d);
};

maxProductDifference([5,6,2,7,4]);
maxProductDifference([4,2,5,9,7,4,8]);