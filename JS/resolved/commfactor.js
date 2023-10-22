/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let answ = 0;
    for (let i = 1; i <= a; i++) {
        if(a%i==0 && b%i==0){
            answ +=1;
        }
    }
    return answ;
};

commonFactors(12,6);

/* var commonFactors = function(a, b) {
    let fact = [];
    let answ = 0;
    for (let i = 1; i <= a; i++) {
        if(a%i==0){
            fact.push(i);
        }
    }
    for (let j = 0; j < fact.length; j++) {
        if(b%fact[j]==0){
            answ++;
        }
    }
    return answ;
}; */