/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function(n) {    
//     return () => {
//         return n++;
//     };
// };

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

var createCounter = (n) => {    
    return () => n++;
};