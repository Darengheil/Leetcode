/**
 * @param {number} num
 * @return {boolean}
 */
// good
var isSameAfterReversals = function(num) {
    let valaft1revers = num.toString().split('').reverse().join('').replace(/^0+/, "");
    if(num == valaft1revers.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
};

isSameAfterReversals(526);
isSameAfterReversals(1800);

// slow but least memory usage
/* var isSameAfterReversals = function(num) {
    let valaft1revers = num.toString().split('').reverse().join('');
    while(valaft1revers.charAt(0) === '0'){
        valaft1revers = valaft1revers.substring(1);
    }
    if(num == valaft1revers.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }
}; */