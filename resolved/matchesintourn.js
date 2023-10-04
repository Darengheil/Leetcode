/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
    let answ = 0;
    while(Math.floor(n/2) > 0){
        if(n % 2 == 1){
            answ += (n-1)/2;
            n = (n-1)/2+1;
        }else{
            answ += n/2;
            n /= 2;
        }
    }
    return answ;
};

numberOfMatches(7);

// var numberOfMatches = function(n) {
//     return n-1;
// };

// let numberOfMatches = n => n - 1