/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    s.split('');
    let answ = [];
    for(let i =1; i <= s[4];i++){
        answ.push((s[0] + i));
    }
    console.log(answ);
    return s;
};

cellsInRange("K1:L2");