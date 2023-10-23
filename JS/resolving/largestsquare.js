/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let counter = 0;
    let maxval = 0;
    for (let rect of rectangles) {
        let maxLen = Math.min(rect[0],rect[1]);
        if(maxLen > maxval){
            counter = 1;
            maxval = maxLen;
        }else if(maxLen == maxval){
            counter++;
        }
    }
    return counter;
};

countGoodRectangles([[5,8],[3,9],[5,12],[16,5]]);

countGoodRectangles([[2,3],[3,7],[4,3],[3,7]])

countGoodRectangles([[5,8],[3,9],[3,12]])

// very slow
/* var countGoodRectangles = function(rectangles) {
    let foransw = [];
    for (let i = 0; i < rectangles.length; i++) {
        foransw.push(Math.min(...rectangles[i]));
    }
    let counter = 0;
    for (let j = 0; j < foransw.length; j++) {
        if(Math.max(...foransw)==foransw[j]){
            counter+=1
        }
    }
    return counter;
}; */