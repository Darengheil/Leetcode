/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
/* var xorOperation = function(n, start) {
    let answ = [];
    for(let i = 0;i<n;i++){
        answ.push(start);
        start+=2;
    }
    let answ2 = 0;
    for(let j=0; j<answ.length;j++){
        answ2 ^= answ[j];
    }
    return answ2;
}; */

var xorOperation = function(n, start) {
    let answ = 0;    
    for(let j=0; j<n;j++){
        answ ^= start + 2*j;
    }
    return answ;
};


xorOperation(5,0);