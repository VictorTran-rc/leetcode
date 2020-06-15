Say you have an array prices for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
1) The data point to the right has to be greater then the data point to the left in order to have a profit 
2) Set a variable named profit to increase the total of profit of the course of the function 
3) Loop throught the function to see if the data points make a profit 
4) If the current prices we are on is greater than the price of left of current (price - 1)
5) if true add the difference between current data point and the left of current to profit

var maxProfit = function(prices){
   let profit = 0;
    for(let i = 1; i < prices.length; i++){
        if ( prices[i] > prices[i-1]){
            profit += profit + prices[i] - prices[i-1];
        }
    }
    return profit;
};
