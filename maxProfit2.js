var maxProfit = function(prices) {
    const n = prices.length;
    const dp = Array.from(new Array(n), () => new Array(2).fill(0));
    if (n < 2) {
        return 0;
    }
    dp[0][0] = prices[0];
    dp[0][1] = -prices[0];
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }
    return dp[n-1][0];
}; 