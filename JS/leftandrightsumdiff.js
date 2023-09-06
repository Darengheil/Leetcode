/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum=0;
    let rightSum=nums.reduce((sum, curr)=> sum += curr,0);    
    return nums.map((curr)=>{
        rightSum-=curr;
        let ans = Math.abs(rightSum-leftSum);
        leftSum+=curr;
        return ans;
    });
};



leftRightDifference([10,4,8,3]);