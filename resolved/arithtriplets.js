/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let answ = 0;
    for(let i = 0; i<nums.length;i++){
        if(nums.includes(nums[i]+diff)&& nums.includes(nums[i]+2*diff)){
            answ++;
        }
    }
    return answ;
};
arithmeticTriplets([0,1,4,6,7,10], 3);
arithmeticTriplets([4,5,6,7,8,9], 2);