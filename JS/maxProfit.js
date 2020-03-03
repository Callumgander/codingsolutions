// Best time to buy and sell stock, leetcode
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/


// relatively fast, does the job
var maxProfit = function(prices) {
    // set max to 0, and min to whatever the max of prices is so that it will change at some point to the min in the array. loop through prices, replacing the min if prices[i] is less than min, and otherwise comparing the current max value to prices[i] - the current minimum, and then return the max
    let max = 0;
    let min = Math.max(...prices);
    for (let i = 0; i < prices.length; i++){
        if (prices[i] < min) {
            min = prices[i];
        } else {
            max = Math.max(max, prices[i] - min);
        }
    }
    return max;
};