/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var countPairs = function(nums, k) {
    let answ = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            ((nums[i]==nums[j])&&((i*j)%k==0)) ? answ++ : null;
        }
    }
    return answ;
};

/* var countPairs = function(nums, k) {
    let answ = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if((nums[i]==nums[j])&&((i*j)%k==0)){
                answ++;
            }        
        }
    }
    return answ;
}; */

// countPairs([3,1,2,2,2,1,3], 2);

countPairs([5,5,9,2,5,5,9,2,2,5,5,6,2,2,5,2,5,4,3], 7);