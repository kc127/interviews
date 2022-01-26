/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let amt = 1; amt <= amount; amt++) {
      for (let coin of coins) {
          if (amt - coin < 0) continue;
          dp[amt] = Math.min(dp[amt], dp[amt - coin] + 1);
      }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};