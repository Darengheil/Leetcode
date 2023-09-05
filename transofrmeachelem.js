/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        newarr.push(fn(arr[i], i));
    }
    return newarr;
};

map([1,2,3], function plusone(n) { return n + 1; });
map([1,2,3], function plusI(n, i) { return n + i; });
map([10,20,30], function constant() { return 42; });