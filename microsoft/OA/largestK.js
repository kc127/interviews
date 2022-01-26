
/*
Write a function that, given an array A of N integers, returns the lagest integer K > 0 such that both values K and -K exist in array A. If there is no such integer, the function should return 0.



Input: [3, 2, -2, 5, -3]  Output: 3

[3, 2, -2, 5, -3]
sort
[5,3,2,-2,-3]
   ^
           ^
k = 3

Input: [1, 2, 3, -4]
Output: 0
*/

function largestK(arr) {
  let unique = new Set();
  let max = 0;
  for (let num of arr) {
    if (unique.has(num * -1)) {
       max = Math.max(max, Math.abs(num));
    } else {
      unique.add(num);
    }
  }
  return max;
}

console.log(largestK([3, 2, -2, 5, -3]), " expect 3");
console.log(largestK([1, 2, 3, -4]), " expect 0");
console.log(largestK([-41,3,2,5,41]), " expect 41");