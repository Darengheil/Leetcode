/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    return word.slice(0, word.indexOf(ch)+1).split("").reverse().join("") + word.slice(word.indexOf(ch)+1, word.length);
};

reversePrefix("abcdefd", "d");

// var reversePrefix = function(word, ch) {
//     let partofword1 = word.slice(0, word.indexOf(ch)+1).split("").reverse().join("");
//     let partofword2 = word.slice(word.indexOf(ch)+1, word.length);
//     let answer = partofword1 + partofword2;
//     let anser = word.slice(0, word.indexOf(ch)+1).split("").reverse().join("") + word.slice(word.indexOf(ch)+1, word.length)
//     console.log(word.slice(0, word.indexOf(ch)+1).split("").reverse().join("") + word.slice(word.indexOf(ch)+1, word.length))
//     return word.slice(0, word.indexOf(ch)+1).split("").reverse().join("") + word.slice(word.indexOf(ch)+1, word.length);
// };