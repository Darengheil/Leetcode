/**
 * @param {number[][]} edges
 * @return {number}
 */

var findCenter = function(edges) {
    for(let i =0; i<edges.length;i++){
        if(edges[i].includes(edges[i+1][0])){
            return edges[i+1][0];
        }
        else if(edges[i].includes(edges[i+1][1])){
            return edges[i+1][1];
        }else{
            return false;
        }
    }
};

// var findCenter = function(edges) {
//     for(let i =0; i<edges.length;i++){
//         if(edges[i][0]==edges[i+1][0]){
//             return edges[i][0];
//         }
//         else if(edges[i][0]==edges[i+1][1]){
//             return edges[i][0];
//         }
//         else if(edges[i][1]==edges[i+1][0]){
//             return edges[i][1];
//         }
//         else if(edges[i][1]==edges[i+1][1]){
//             return edges[i][1];
//         }else{
//             return false;
//         }
//     }
// };

findCenter([[1,2],[2,3],[4,2]]);