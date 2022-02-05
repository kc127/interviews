/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.



Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.


Intuition:
  - check how many chars have odd freq using a set and a evenCount variable
  - after first traversal,
      if set length is 0 then we don't have any chars with odd val
      - which means return evenCount * 2
      else
        return evenCount * 2 + 1
      */

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  let chars = new Set();
  let count = 0;
  for (let ch of s) {
      if (chars.has(ch)) {
          chars.delete(ch);
          count++;
      } else {
          chars.add(ch);
      }
  }
  return chars.size ? count * 2 + 1 : count * 2;
};