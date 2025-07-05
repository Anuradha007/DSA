const maxProfit = ( prices ) => {
    let minPrice = prices[0];
    let maxProfit = 0;

    for(let z = 1; z < prices.length; z++){
        const currentPrice = prices[z];

        minPrice = Math.min(minPrice, currentPrice);

        const potentialProfit = currentPrice - minPrice;

        maxProfit = Math.max(maxProfit, potentialProfit);

    }
    return maxProfit;

}

const prices = [ 7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum Profit: ", profit);
