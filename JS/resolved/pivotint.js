/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let fromstart = 0;
    for (let i = 0; i <= n; i++) {
        fromstart = fromstart +i;
    }
    if(Number.isInteger(Math.sqrt(fromstart))){
        return Math.sqrt(fromstart);
    }else{
        return -1;
    }
};
// cheat solution
/* var pivotInteger = function(n) {
    let son = Math.sqrt((n*n+n)/2)
    if (parseInt(son) == son)
        return son;
    return -1;
}; */

pivotInteger(8);