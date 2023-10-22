/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let result = 0;
    for (let i = 0; i < patterns.length; i++) {
        if(word.includes(patterns[i])){
            result+=1;
        }
    }
    return result;
};

numOfStrings(["a","abc","bc","d"],"abc");