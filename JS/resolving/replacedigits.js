/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let result = s;
    for (let i = 0; i < result.length; i+=2) {
        result.replace(result[i+1], alph[alph.indexOf(result[i])]);
        console.log(alph[alph.indexOf(result[i])])
    }
    console.log(result);
    return result;
};

replaceDigits("a1c1e1");