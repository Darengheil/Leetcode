/**
 * @param {number[]} nums
 * @return {number}
 */

// while is always bad cause of runtime
var minOperations = function(nums) {
    let answ = 0;
    for (let i = 0; i < nums.length; i++) {
        while(nums[i]>=nums[i+1]){
            nums[i+1]+=1;
            answ+=1;
        }
    }
    return answ;
};

minOperations([1,1,1]);
minOperations([1,5,2,4,1]);


// fastest sol
/* const minOperations = nums => {
    let prevEl = nums[0];
    let counter = 0;
    
    for (let i = 0; i < nums.length - 1; i += 1) {
        if (nums[i + 1] <= prevEl) {
            const diff = prevEl + 1 - nums[i+1] 
            counter += diff
            prevEl += 1
        } else {
            prevEl = nums[i+1]
        }
    }

    return counter;
}; */