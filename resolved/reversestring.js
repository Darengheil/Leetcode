/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").map((elem) => elem.split("").reverse().join("")).join(' ');
};

reverseWords("Let's take LeetCode contest");