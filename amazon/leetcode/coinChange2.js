/*
total combinations
*/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
 var change = function(amount, coins) {
  let dp = Array(amount+1).fill(0);
  dp[0] = 1;

  for (let coin of coins) {
      for (let amt = coin; amt <= amount; amt++) {
          if (amt-coin >= 0) {
              dp[amt] += dp[amt - coin];
          }
      }
  }
  return dp[amount];
};