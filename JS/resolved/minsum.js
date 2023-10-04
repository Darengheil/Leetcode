/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let numArr = String(num).split("").sort();
    return parseInt(numArr[0]+numArr[2]) + parseInt(numArr[1] + numArr[3]);
};

minimumSum(2932);


// console.log(numArr);
// console.log(parseInt(numArr[0]+numArr[2]) + parseInt(numArr[1] + numArr[3]));