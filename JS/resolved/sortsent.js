/**
 * @param {string} s
 * @return {string}
 */

var sortSentence = function(s) {
    let arr = s.split(" ").sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    arr.forEach((el, i) => {
        arr[i] = el.slice(0, -1);
    });
    return arr.join(" ");
};


var sortSentence = function(s) {
    let arr = s.split(" ").sort((a,b)=> a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    let newarr = [];
    for(let i =0; i < arr.length;i++){
        newarr.push(arr[i].slice(0, -1));
    }
    return newarr.join(" ");
};

sortSentence("is2 sentence4 This1 a3");
// sortSentence("Myself2 Me1 I4 and3")