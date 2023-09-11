/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let answ = 0;
    let numArr = String(num).split("").map((num) => {return Number(num)});
    for(let i = 0; i < numArr.length; i++){
        if(num % numArr[i] == 0){
            answ ++;
        }
    }
    return answ;
};

countDigits(7);
countDigits(121);
countDigits(1248);