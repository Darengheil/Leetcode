/**
 * @param {number[]} nums
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function() {
  return this.nums.reduce((acc, val) => acc + val, 0);
}

ArrayWrapper.prototype.toString = function() {
  return `[${this.nums.join(',')}]`;
}


  const obj1 = new ArrayWrapper([1,2]);
  // console.log(obj1);
  const obj2 = new ArrayWrapper([3,4]);
  // console.log(obj2);
  console.log(obj1 + obj2); // 10
  String(obj1); // "[1,2]"
  console.log(obj1);
  String(obj2); // "[3,4]"
  console.log(obj2);


  
  