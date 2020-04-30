# Best time to buy and sell stock 2, leetcode
# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # if there are no prices, return 0
        if (prices == None or len(prices) == 0):
            return 0
        profit = 0
        # if the price of the following day is higher than that of the initial day, buy the stock on the initial day and sell it on the following day and add it to profit. Repeat for all of prices and return
        for i in range(len(prices) - 1):
            if prices[i] < prices[i+1]:
                profit += prices[i + 1] - prices[i]
        return profit
