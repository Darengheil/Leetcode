/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let answ = [];
    function shift(a,b){
        return alph[alph.indexOf(a)+b];
    }
    for (let i = 0; i < s.length; i++) {
        if(!isNaN(s[i])){
            answ.push(shift(s[i-1], parseInt(s[i])));
        }else{
            answ.push(s[i]);
        }
        
    }
    return answ.join("");
};

replaceDigits("a1c1e1");

// 123