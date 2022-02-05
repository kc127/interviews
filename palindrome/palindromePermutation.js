/*
Given a string s, return true if a permutation of the string could form a palindrome.

Example 1:

Input: s = "code"
Output: false

intuition:
  - only a palindromic string can have permutation of it
  - check if the curr string is a palindrome (oddlen vs evenlen)
  - if yes, return true
  - else return false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
 var canPermutePalindrome = function(s) {
  let charFreq = {};
  let count = 0;
  for (let ch of s) {
      charFreq[ch] = (charFreq[ch] || 0) + 1;
  }
  for (let char in charFreq) {
      if (charFreq[char] % 2 !== 0) {
          count++;
      }
  }
  return count <= 1 ? true : false;
};