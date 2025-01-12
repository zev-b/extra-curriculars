1. __Core Data Structures__:

    - Arrays, Strings, Linked Lists
    - Stacks, Queues, Priority Queues
    - HashMaps, HashSets, Dictionaries
    - Trees, Binary Search Trees, Tries
    - Graphs (Adjacency List, Adjacency Matrix)

2. __Algorithms__:

    - Sorting and Searching (e.g., QuickSort, MergeSort, Binary Search)
    - Recursion and Backtracking
    - Dynamic Programming
    - Greedy Algorithms
    - Divide and Conquer
    - Graph Algorithms (e.g., BFS, DFS, Dijkstra’s, Kruskal’s, Prim’s)
3. __Problem-Solving Skills__:

    - Time and Space Complexity Analysis
    - Pattern recognition for problem-solving
    - Mock interview questions and solutions
4. __Specific Topics for Interviews__:

    - Sliding Window, Two Pointers
    - Union-Find (Disjoint Set Union)
    - Topological Sorting
    - Heap and Priority Queue problems

## Step 1: Arrays
- __*Definition*__: A collection of elements, identified by index or key, stored in contiguous memory locations.

__Key Characteristics__:

- Fixed size (in low-level languages like C).
- Allows random access using indices.
- Ideal for scenarios where elements are accessed sequentially or randomly.

__Common Operations__:

- Accessing elements: 
𝑂
(
1
)
- Searching for an element: 
𝑂
(
𝑛
)
(linear search), 
𝑂
(
log
⁡
𝑛
)
 (binary search for sorted arrays)
- Insertion (at the end): 
𝑂
(
1
)
; at a specific index: 
𝑂
(
𝑛
)
- Deletion: 
𝑂
(
𝑛
)
 (due to shifting elements)

__Use Cases__:

- Storing sequential data like daily temperatures, stock prices.
- Building more complex data structures like heaps and stacks.

__Example Problems__:
> [__Two Sum__: Given an array of integers and a target sum, find two numbers such that they add up to the target.](#example-problem-1-two-sum)

*Example*: Input: `nums = [2, 7, 11, 15]`, `target = 9 -> Output: [0, 1]`

> [__Maximum Subarray__: Find the contiguous subarray with the largest sum.]()

*Example*: Input: `nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]` -> `Output: 6 (subarray [4, -1, 2, 1])`

__Practice Problems__:
- Implement a function to rotate an array 
𝑘
steps to the right.
- Merge two sorted arrays into one sorted array.
- Find the intersection of two arrays.

### Example Problem 1: *Two Sum*
```
Given an array nums and a target sum target, find two indices such that their corresponding values add up to target.
```
Solution Steps:
1. Use a hash map to store numbers and their indices as you iterate through the array.
2. For each number, calculate its complement (`target - current number`).
3. Check if the complement exists in the hash map:
    - If it does, return the indices.
    - Otherwise, store the current number and its index in the hash map.

```js
function twoSum(nums, target) {
    const map = new Map(); // To store number and its index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement
        
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return indices if complement is found
        }
        
        map.set(nums[i], i); // Store the current number with its index
    }
    
    return []; // Return empty if no solution
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

```

### Example Problem 2: *Maximum Subarray* (Kadane’s Algorithm)
```
Find the contiguous subarray with the largest sum.
```
Solution Steps:
1. Use a variable `currentSum` to track the sum of the current subarray.
2. Use a variable `maxSum` to track the maximum sum seen so far.
3. Iterate through the array:
    - Add the current element to `currentSum`.
    - If `currentSum` becomes negative, reset it to 0 (it won't contribute to a maximum sum).
    - Update `maxSum` with the maximum of `maxSum` and `currentSum`.
4. Return `maxSum`.
```js
function maxSubArray(nums) {
    let maxSum = nums[0]; // Initialize with the first element
    let currentSum = 0;

    for (let num of nums) {
        currentSum = Math.max(num, currentSum + num); // Update current sum
        maxSum = Math.max(maxSum, currentSum); // Update max sum
    }

    return maxSum;
}

// Example
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

```

### Practice Problem 1: *Rotate Array*
```
Rotate an array 𝑘 steps to the right.
```

Solution Steps:
1. Use the modulus operator to handle cases where `𝑘 > 𝑛𝑢𝑚𝑠.𝑙𝑒𝑛𝑔𝑡ℎ`
2. Reverse the entire array.
3. Reverse the first `𝑘` elements.
4. Reverse the remaining elements.
```js
function rotate(nums, k) {
    k = k % nums.length; // Handle cases where k > nums.length
    
    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    
    nums.reverse(); // Step 1: Reverse the entire array
    reverse(0, k - 1); // Step 2: Reverse the first k elements
    reverse(k, nums.length - 1); // Step 3: Reverse the remaining elements
}

// Example
const nums = [1, 2, 3, 4, 5, 6, 7];
rotate(nums, 3);
console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
```

### Practice Problem 2: *Merge Two Sorted Arrays*
```
Merge two sorted arrays into one sorted array.
```
Solution Steps:
1. Use two pointers, starting at the beginning of both arrays.
2. Compare elements from both arrays, adding the smaller element to the result.
3. If one array is exhausted, add the remaining elements of the other array.
```js
function mergeSortedArrays(arr1, arr2) {
    const result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from either array
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    return result;
}

// Example
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

```