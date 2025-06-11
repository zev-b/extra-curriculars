looking for a subset of arr or str to fulfill a condition, continuously:
maxSubarraySum, 2 or more digits to fulfil a cond that are neighbors (consecutive):

```js
function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    // loop thru array, up until the last indx we can compare the next 'num' values to (so that we dont compare values at the end of the array to anything not within. j will loop through the rest and stop at length.)
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;
        for (let j = 0; j < num; j++) {
            // calculates FROM starting idx UNTIL 'offset' of num on ea iteration to sum for comparison to max
            temp += arr[i + j]
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
}
```
time: O(n ^ 2)
space: O(1)

# Refactored

keep track of sum then subtract the beginning idx of window and add new idx added to moving window

```js
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

```