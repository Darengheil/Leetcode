/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var maximizeSum = function(nums, k) {
//     let newarr = [];
//     let n = 0;
//     while(n < k){
//         newarr.push(Math.max(...nums)+n);
//         n+=1;
//     }
//     return newarr.reduce((acc, el)=>acc+el,0);
// };

var maximizeSum = function(nums, k) {
    let answ = 0;
    let n = 0;
    while(n < k){
        answ += (Math.max(...nums)+n)
        n+=1;
    }
    return answ;
};


maximizeSum([1,2,3,4,5],3);
maximizeSum([5,5,5],2);