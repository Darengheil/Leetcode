/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */


var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a)-fn(b));
};

// sortBy([5, 4, 1, 2, 3], fn = (x) => x);
sortBy([[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]);
sortBy([{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x);