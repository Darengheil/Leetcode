/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let answ = [];
    arr.forEach((elem, i) => {
        fn(elem, i)
        if(fn(elem, i)){
            answ.push(elem);
        }        
    });
    return answ;
};


filter([0,10,20,30], function greaterThan10(n) { return n > 10; });
filter([1,2,3], function firstIndex(n, i) { return i === 0; });