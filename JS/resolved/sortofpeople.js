/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let result = new Map();
    let realansw = [];
    for (let i = 0; i < heights.length; i++) {
        result.set(heights[i], names[i]);        
    }
    heights.sort((a,b) => b-a);
    for (let height of heights) {
        realansw.push(result.get(height));
    }
    return realansw;
};

sortPeople(["Mary","John","Emma"], [180,165,170]);
sortPeople(["Alice","Bob","Bob"], [155,185,150]);

// console.log(heights.sort().reverse());

// var sortPeople = function(names, heights) {
//     let length = heights.length;
//     let map = new Map();
//     for(let i=0; i<length; i++){
//         map.set(heights[i], names[i]);
//     }
//     heights.sort((a,b) => b-a);
//     let res = [];
//     for(let height of heights){
//         res.push(map.get(height));
//     }
//     return res;
// };