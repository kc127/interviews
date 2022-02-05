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