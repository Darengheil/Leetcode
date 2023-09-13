/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let counter = 0;
    for(let i = 0; i < sentences.length; i++){
        if(counter < sentences[i].trim().split(/\s+/).length){
            counter = sentences[i].trim().split(/\s+/).length;
        }
    }
    return counter;
};

mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]);
mostWordsFound(["please wait", "continue to fight", "continue to win"]);