/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    if(word1.toString().replaceAll(",", "") == word2.toString().replaceAll(",", "")){
        return true;
    }else{
        return false;
    }
};

arrayStringsAreEqual(["ab", "c"], ["a", "bc"])
arrayStringsAreEqual(["ab", "c"], ["a", "bc"])


// let newWord1 = word1.toString().replaceAll(",", "");
// let newWord2 = word2.toString().replaceAll(",", "");