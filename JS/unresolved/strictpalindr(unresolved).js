/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let base = 2;
    let answ = true;
    while(base <= (n-2)){
        if((n.toString(base).split('').reverse().join('')) == n.toString(base)){
            answ = true;
        }
        else{
            answ = false;
        }        
        base ++;
    }
    return answ;
};

isStrictlyPalindromic(9);
isStrictlyPalindromic(4);
isStrictlyPalindromic(60);