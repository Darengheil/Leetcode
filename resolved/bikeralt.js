/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let start = [0];
    for(let i=0;i<gain.length;i++){
        start.push(start[i]+gain[i]);
    }
    return Math.max(...start);
};

largestAltitude([-5,1,5,0,-7]);
largestAltitude([-4,-3,-2,-1,4,3,2]);