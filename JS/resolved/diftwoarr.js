/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    return [nums1.filter((o) => nums2.indexOf(o) === -1).filter((x, i, a) => a.indexOf(x) == i), nums2.filter((o) => nums1.indexOf(o) === -1).filter((x, i, a) => a.indexOf(x) == i)];
};
findDifference([1,2,3],[2,4,6]);
findDifference([1,2,3,3], [1,1,2,2]);

// shitty solution
/* var findDifference = function(nums1, nums2) {
    let answ0 = nums1.filter((o) => nums2.indexOf(o) === -1);
    let answ1 = nums2.filter((o) => nums1.indexOf(o) === -1);
    let uniqueansw0 = [...new Set(answ0)];
    let uniqueansw1 = [...new Set(answ1)];
    let finalansw = [];
    finalansw.push(uniqueansw0);
    finalansw.push(uniqueansw1);
    return finalansw;
}; */


/* var findDifference = function(nums1, nums2) {
    let answ0 = nums1.filter((o) => nums2.indexOf(o) === -1).filter((x, i, a) => a.indexOf(x) == i);
    let answ1 = nums2.filter((o) => nums1.indexOf(o) === -1).filter((x, i, a) => a.indexOf(x) == i);
    let finalansw = [];
    finalansw.push(answ0, answ1);
    return finalansw;
}; */
