/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let answ = 0;
    for (let i = 0; i < points.length-1; i++) {
        if(Math.abs(points[i+1][0]-points[i][0])>Math.abs(points[i+1][1]-points[i][1])){
            answ += Math.abs(points[i+1][0]-points[i][0]);
        }else{
            answ += Math.abs(points[i+1][1]-points[i][1]);
        }
    }
    return answ;
};

minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]);
minTimeToVisitAllPoints([[3,2],[-2,2]])