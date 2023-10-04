/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let answ = s.split('');
    let counter = 0;
    for (let i = 0; i < Math.floor(answ.length/2); i++) {
        for (let j = answ.length-1; j > Math.floor(answ.length/2); j--) {
            console.log(answ[i])
            // console.log(answ[j])
            if((answ[i]!=answ[j])&&counter!==1){
                answ[i]=answ[j];
                counter++;
            }
        }        
    }
    console.log(answ);
    return answ;
};

makeSmallestPalindrome("egcfe");