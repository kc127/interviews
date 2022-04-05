/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.

 pseudocode:
 - (pivotIndex) find lagest index i such that array[i-1] < arr[i]
 (if no such i exists, then this is already the last permutation)
 - (largestIndex) find the largest index j such that j >= i and array[j] >  array[i-1]
 - swap array[j], array[i-1]
 - reverse the suffix starting at array[i]

https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

 */


 var nextPermutation = function(nums) {
  // longest non-increasing suffix
  let i = nums.length - 1;
  while (i > 0 && nums[i-1] >= nums[i]) {
      i--;
  }
  if (i <= 0) {
      nums.sort((a,b) => a-b);
      return;
  }
  let  j = nums.length - 1;
  while (nums[j] <= nums[i-1]) {
      j--;
  }
  [nums[i-1],nums[j]] = [nums[j],nums[i-1]];

  j = nums.length - 1;
  while (i < j) {
      [nums[i],nums[j]] = [nums[j],nums[i]];
      i++;
      j--;
  }
};
