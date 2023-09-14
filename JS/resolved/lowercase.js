/**
 * @param {string} s
 * @return {string}
 */

var toLowerCase = function(s) {
    let answ = "";
    for(let letter of s){
        let n = letter.charCodeAt();
        answ += n>=65 && n <= 90 ? String.fromCharCode(n+32) : letter;
    }
    return answ;
};


// var toLowerCase = function(s) {    
//     return s.toLowerCase();
// };

toLowerCase('Hello');

