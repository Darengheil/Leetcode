/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let answ = [];
    // this one checks if number is selfdividing
    const checkNum = (num) => {
        let numfortask = num;
        while (num > 0) {
            if (numfortask % (num % 10) !== 0) {
                return false;
            }
            num = Math.floor(num / 10);
        }
        return true;
    }

    // this one iterate through numbers
    while(left <= right){
        if(checkNum(left)){
            answ.push(left);
        }
        left+=1;
    }
    return answ;
};

selfDividingNumbers(1,22);
selfDividingNumbers(47,85);

