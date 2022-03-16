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