var maxProfit = function(prices) {
    const n = prices.length;
    let minPrice = prices[0];
    if (n === 0) return 0;
    let dp = [];
    for (let i = 1; i < n; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
    }
    return dp[n-1];
}