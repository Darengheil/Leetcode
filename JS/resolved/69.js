/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    return Number(String(num).replace('6','9'));
};

maximum69Number(9669);
maximum69Number(9996);
maximum69Number(9999)