/**
 * @param {number} 
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    if (n % 2 == 1){
        return n*2;
    }else{
        return n;
    }
};

console.log(smallestEvenMultiple(5));
console.log(smallestEvenMultiple(6));