/**
 * @param {number[]} nums
 * @return {number}
 */
 var numberOfArithmeticSlices = function(nums) {
  let sum = 0;
  let dp = 0;
  for (let i = 2; i < nums.length; i++) {
      if (nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) {
          dp = 1 + dp;
          sum += dp;
      } else {
          dp = 0;
      }
  }
  return sum;
};

