/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    let answ = 0;
    while(grid[0].length){
        let valholder = [];
        for (let i = 0; i < grid.length; i++) {
            valholder.push(grid[i].splice(grid[i].indexOf(Math.max(...grid[i])), 1));
        }
        answ += Math.max(...valholder);
        valholder.length = 0;
    }
    return answ;
};

deleteGreatestValue([[1,2,4],[3,3,1]]);
deleteGreatestValue([[10]]);

