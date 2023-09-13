/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    strArr = s.split(" ");
    strArr.length = k;
    answ = strArr.toString().replaceAll(",", " ");
    return answ;
};

truncateSentence("Hello how are you Contestant",4);