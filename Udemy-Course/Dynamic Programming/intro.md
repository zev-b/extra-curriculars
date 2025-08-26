# Dynamic Programming

- **Overlapping Subproblems**

- **Optimal Substructure**

### A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each just once, and storing their solutions.

## Conditions to apply Dynamic Programming:
- *Overlapping Subproblems:*
  - A problem can be broken down into subproblems which are **reused several times**. 
  - *Fibonacci Sequence* (Every number after the first 2, is the sum of the two preceding numbers). This overlaps since each time we need to calculate the next # in the sequence, `fib(20)`, `fib(21)`, etc, we return to calculate all previous `fib(3)`, `fib(4)`, `fib(5)`...
  - But `mergeSort()` (split until single el arrays, and sort accordingly back together), since the comparison is between different els every time, **its not overlapping**, so better to use divide and conquer technique. There is a subproblem, but **not** an overlapping redundant code execution.

- *Optimal Substructure*:
  - The optimal solution of the bigger problem can be constructed from the optimal solutions of its subproblems.
  - *Shortest Path* btw nodes on a graph, so with a graph containing nodes and weights, determining the shortest path from A to D (A->B->C->D), will come from solving the shortest path from A->B->C, and A->B, the final shortest path, is a string of shortest paths between each other along the way!
  - But *Longest Simple Path* (No repeats) **does not** contain the optimal substructure, since in essence we cannot repeat! so nothing is reused.
  - *Cheapest flight* SFO to FAI, SFO->SEA->FAI, but breaking this route down, SFO->SEA is **not** its cheapest for this sub-route, rather SFO->PDX->SEA. Airlines have own agenda in determining the cheapest for your route, so its missing the optimal substructure.

## Fibonacci Sequence
### Formula
```js
fib(n) = fib(n-1) + fib(n-2)
fib(2) = 1
fib(1) = 1
```
### Recursive Naive
```js
function fib(n) {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
```
- Big O of above fibonacci solution:
  - `O(2^n)` Exponential! really bad ( Really O(1.6 ^ n) but we round).

### Improving Fib Solution:
- We're repeating too much, so we have overlap and repetition. 
- So what if we save the solved problems and store the solutions to return to later.
  
### Memoization 📝 ⬇️
- Storing the results of expensive function calls and returning the cached result when the same input occurs again.
- **Big O: `O(n)`** it roughly grows proportionately with input, instead of the previous exponential notation.
```js
function fib(n, memo=[]) {
    if (memo[n] !== undefined) return memo[n];
    if (n <= 2) return 1;
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
```

#### Can alternatively write above solution in a way that even using recursion we won't need an explicit base case defined, since we can set up the memo data structure to have that base case return val...
```js
function fib(n, memo=[undefined,1,1]) {
    if (memo[n] !== undefined) return memo[n];
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
```

### Tabulation 💊 ⬆️
- until now we have works from top to down, but we can also go bottom up!
- usually done using iteration
- store vals in an array like memoization
- better **space** complexity, so no maximum callstack problem of recursion with very large numbers!

```js
function fib(n) {
    if (n <= 2) return 1;
    let fibNums = [0,1,1];
    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}