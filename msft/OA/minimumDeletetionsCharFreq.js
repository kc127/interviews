/**
 * @param {string} s
 * @return {number}
 */
/*
 1. create a hashmap that maps the char with its freq
        "aab"
        {a:2, b:1}
 2. traverse over our hashmap values
        maintain a set, counter
        if curr value is not in the set, add it
        else decrement it as long as it can be added
            count the decremeents,
 3. return count

*/
var minDeletions = function(s) {
  let unique = new Set();
  let count = 0;
  let freq = {};
  for (let c of s) {
      freq[c] = (freq[c] || 0) + 1;
  }

  Object.values(freq).forEach(val => {
     while (unique.has(val) && val > 0) {
         val--;
         count++;
     }
     unique.add(val);
  })

  return count;
};