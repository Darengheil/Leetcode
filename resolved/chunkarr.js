/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function(arr, size) {
    let answ = [];
    for(let i = 0; i < arr.length; i +=size){
        answ.push(arr.slice(i, i+size));
    }
    return answ;
};


chunk([1,2,3,4,5], 1);
// chunk([1,9,6,3,2], 3);