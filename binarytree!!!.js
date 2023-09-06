/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    function TreeNode(val){
        this.val = val;
        this.left = this.right = null;
    }
    console.log(TreeNode(target));
    return TreeNode(target);
};

getTargetCopy([7,4,3,null,null,6,19],[7,4,3,null,null,6,19],3);