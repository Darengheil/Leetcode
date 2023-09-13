/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let answ = 0;
    for(let i =0; i< arr.length; i++){
        answ+=i;
    }
};

sumOddLengthSubarrays([1,4,2,5,3]);
// sumOddLengthSubarrays([1,2]);