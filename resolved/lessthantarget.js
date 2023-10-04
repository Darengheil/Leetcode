/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            if(((nums[i] + nums[j]) < target) && (i < j) ){
                counter++;
            }
        }
    }    
    return counter;
};

countPairs([-1,1,2,3,1], 2);
countPairs([-6,2,5,-2,-7,-1,3], -2);
countPairs([9,-5,-5,5,-5,-4,-6,6,-6], 3);
// console.log(counter);

// 3 10 27