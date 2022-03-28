/*
  use MAP or obj
  time & space: o(n)

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var lengthOfLongestSubstringKDistinct = function(str, k) {
  let s = 0;
  let e = 0;
  let longest = 0;
  let chars = {};
  while (e < str.length) {
      chars[str[e]] = (chars[str[e]] || 0) + 1;

      while (Object.keys(chars).length > k) {
          chars[str[s]]--;
          if (chars[str[s]] === 0) {
              delete chars[str[s]];
          }
          s++;
      }
      longest = Math.max(longest, e - s + 1);
      e++;
  }
  return longest;
};