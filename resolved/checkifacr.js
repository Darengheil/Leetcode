/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    words.forEach((el, i)=>{
        words[i] = el.slice(0,1);
    });
    if(words.join("") === s){
        return true;
    }else{
        return false;
    }
};

isAcronym(["alice","bob","charlie"],"abc");
isAcronym(["an","apple"],"a");