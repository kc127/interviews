/***
 *
 * Min Swaps to Make Palindrome
https://leetcode.com/discuss/interview-question/351783/

Given a string, what is the minimum number of adjacent swaps required to convert a string into a palindrome. If not possible, return -1.

Practice online: https://www.codechef.com/problems/ENCD12

Example 1:

Input: "mamad"
Output: 3
Example 2:

Input: "asflkj"
Output: -1
Example 3:

Input: "aabb"
Output: 2
Example 4:

Input: "ntiin"
Output: 1
Explanation: swap 't' with 'i' => "nitin"
 *
 */


function minSwaps(str) {

  if (!shuffledPal(str)){
    return -1;
  }

  let l = 0;
  let r = str.length - 1;
  let swaps = 0;

  while (l < r) {
    let newR = r;
    while (newR > l && str[newR] !== str[l]) {
        newR--;
    }

    for (let i = newR; i < r; i++) {
        str = swap(str, i, i+1);
        swaps++;
    }
    l++;
    r--;

  }

  return swaps === 0 ? -1 : swaps;
}

function swap(s, i, j) {
  let arr = s.split('');
  [arr[i], arr[j]] = [arr[j],arr[i]];
  return arr.join('');
}


function shuffledPal(str) {
  let count = {};
  let oddCount = 0;

  for (let i in str) {
    count[str[i]] = (count[str[i]] || 0) + 1;
  }

  for (let c in count) {
    if (count[c] % 2 !== 0) {
       oddCount++;
    }
  }
  return oddCount <= 1;
}

console.log(minSwaps("mamad")," expect 3");
console.log(minSwaps("aabcb")," expect 3");
console.log(minSwaps("asflkj")," expect -1");
