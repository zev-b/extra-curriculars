# Coin Change *Greedy Algorithm*
- The greedy algorithm is based on the strategy to target the **largest** vals first to sum them until the amount is reached, when it is not yet reached, and adding another will surpass the amount, move to the next largest..

- Important note: In this coding exercise, we are using a **greedy approach** to the coin change problem, *not* Dynamic Programming. Please keep in mind that a greedy approach might **not** work well with all coin systems and denominations. If we need an approach that always yields the true minimum coin count for any set of denominations, we would use a Dynamic Programming approach, which we will implement in the next coding exercise called: "Dynamic Programming – Coin Change". In comparison to the greedy approach, that coding exercise focuses on a Dynamic Programming solution that systematically finds an optimal result for all coin sets.

- But first, let's try the Coin Change - Greedy Algorithm approach:

## Prompt
```js
`Write a function minCoinChange that takes two arguments: an array of coin denominations (coins) and a target amount number (amount). The provided array of coins is sorted in ascending order, starting from the smallest coin denomination to the largest.

Your task is to return an array representing the minimum number of coins needed to make the given amount. The result should be an array of the actual coins used, not their count or sum. To achieve this, you should start by considering the largest denominations first and use them as much as possible before moving to smaller denominations. As a consequence of this, the result array should be sorted in descending order, starting from the largest coin denomination to the smallest.`

Examples:

minCoinChange([1, 2, 3, 4, 5], 11); // this should return: [5, 5, 1]
minCoinChange([5, 10, 15, 20, 25], 85); // this should return: [25, 25, 25, 10]
minCoinChange([1, 5, 6, 9], 11); // this should return: [9, 1, 1]
```

## My Solution:
```js
function minCoinChange(coins, amount) {
  // Input: coin denomination vals, amount to sum to
  // Output: coin vals used to sum amount, sorted descending
  let result = [];
  let currentSum = 0;
  
  let i = coins.length - 1;
  while (i >= 0) {
    if ((currentSum + coins[i]) <= amount) {
        currentSum += coins[i];
        result.push(coins[i]);
    } else {
        i--;
    }
  }
  return result;
}
```


# Coin Change *Dynamic Programming*:

- Dynamic Programming - Coin Change
---
```js
`Write a function called coinChange which accepts two parameters: an array of denominations and a value. The function should return the number of ways you can obtain the value from the given collection of denominations. You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.`

Examples:

const denominations = [1, 5, 10, 25]
 
coinChange(denominations, 1) // 1
coinChange(denominations, 2) // 1
coinChange(denominations, 5) // 2
coinChange(denominations, 10) // 4
coinChange(denominations, 25) // 13
coinChange(denominations, 45) // 39
coinChange(denominations, 100) // 242
coinChange(denominations, 145) // 622
coinChange(denominations, 1451) // 425663
coinChange(denominations, 14511) // 409222339
```

## Solution: Using Tabulation
```js
// tabulation
function coinChange(denominations, amount) {
  // initialize an array of zeros with indices up to amount
  var combinations = new Array(amount + 1).fill(0);
 
  // base case
  combinations[0] = 1;
 
  // for every coin in denominations
  for (let coin of denominations) {
    // start iterating where the coin's value is 
    // (so you don't have to check additional values)
    for (var i = coin; i <= amount; i++) {
      // set in combinations itself plus the value of i minus the coin
      combinations[i] += combinations[i - coin];
    }
  }
  return combinations[amount];
}
```