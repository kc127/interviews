/*
     USE  SET
     time and space: o(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(str) {
  let longest = 0;
  let e = 0;
  let s = 0;
  let uniqueChars = new Set();
  while (e < str.length) {
      let char = str[e];
      if (uniqueChars.has(char)) {
          uniqueChars.delete(str[s]);
          s++;
      } else {
          uniqueChars.add(char);
          longest = Math.max(longest, e - s + 1);
          e++;
      }
  }
  return longest;
};