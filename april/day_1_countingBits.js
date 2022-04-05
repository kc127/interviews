/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let counts = [];

  for (let i = 0; i <= n; i++) {

      counts.push(getBinary(i));
  }
  return counts;
};

var getBinary = (i) => {

  let ones = 0;
  while (i) {
      let rem = i%2
      if (rem === 1) {
          ones++;
      }
      i = Math.floor(i/2);
  }
  return ones;
}
