/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split('');
    arr.length = Math.round(arr.length/2);
    if(arr.length % 2 == 1){
        for (let i = arr.length-2; i >= 0; i--) {
            arr.push(arr[i])
        }
    }else{
        for (let i = arr.length-1; i >= 0; i--) {
            arr.push(arr[i])
        }
    }    
    return arr;
};

makeSmallestPalindrome("egcfe");