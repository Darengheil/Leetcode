/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length == 0){
        return init;
    }
    let val=fn(init,nums[0]);
    for(let i = 0; i<nums.length-1;i++){
        val = fn(val, nums[i+1]);
    }
    return val;
};


reduce([1,2,3,4], function sum(accum, curr) { return accum + curr; }, 0);