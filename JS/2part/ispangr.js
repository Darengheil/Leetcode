/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let compstr = "abcdefghijklmnopqrstuvwxyz";
    for(let i =0; i < compstr.length; i++){  
        if(!sentence.includes(compstr[i])){
            return false;
        }
    }
    return true;
};

var checkIfPangram = function(sentence) {
    return new Set(sentence).size === 26
};

checkIfPangram("thequickbrownfoxjumpsoverthelazydog");
// true
checkIfPangram("leetcode")
//  false
checkIfPangram("uwqohxamknblecdtzpisgvyfjr")
// true
checkIfPangram("jwtucoucmdfwxxqnxzkaxoglszmfrcvjoiunqqausaxxaaijyqdqgvdnqcaihwilqkpivenpnekioyqujrdrovqrlxovcucjqzjsxmllfgndfprctxvxwlzjtciqxgsxfwhmuzqvlksyuztoetyjugmswfjtawwaqmwyxmvo") 
// false