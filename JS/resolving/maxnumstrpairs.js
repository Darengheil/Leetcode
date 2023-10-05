/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let result = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if(words[i]==words[j].split("").reverse().join("")){
                result+=1;
            }
        }
    }
    return result;
};

maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]);
maximumNumberOfStringPairs(["ab","ba","cc"])
maximumNumberOfStringPairs(["aa","ab"])
maximumNumberOfStringPairs(["hw","pa","xx","la","am","vg"]);
// 0
maximumNumberOfStringPairs([["wk","xf","ot","je","hd","kw","fx","to","ej"]])
// 4