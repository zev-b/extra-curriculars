/*

Problem Statement:
* Given an array of integers nums and an integer target, 
* return the indices of the two numbers such that they add up to the target.

?    Input: nums = [2, 7, 11, 15], target = 9
?    Output: [0, 1]
?    Explanation: nums[0] + nums[1] = 2 + 7 = 9

Constraints:
^- Each input will have exactly one solution.
^- You cannot use the same element twice.
*/

let nums = [2, 7, 11, 15];
let target = 9;

function sumOfTwoIndices(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) { 
            if (nums[i] + nums[j] === target) {
                return [i, j]; 
            }
        }
    }
    return null;
}

console.log(sumOfTwoIndices(nums, target));
/*
The outer loop (i) iterates over each element in the array.
The inner loop (j) starts from i + 1 to avoid repeating pairs or using the same element twice.
If the sum of nums[i] + nums[j] matches the target, the indices [i, j] are returned.
*/
//# ======================================================================
//# ====================================================================== 
/*
* Optimized Solution (Using a Hash Map):
* To improve performance, 
* you can use a hash map to store elements and their indices as you iterate:
*/

function sumOfTwoIndices(nums, target) {
    let map = new Map(); // Key: number, Value: index

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i); // Store the current number and its index
    }
    return null; // No solution found
}

// let nums = [2, 7, 11, 15];
// let target = 9;
console.log(sumOfTwoIndices(nums, target)); // Output: [0, 1]

/*

# Why the Hash Map Version is Better:
^ Time Complexity: O(n), since you traverse the array once and use constant-time operations for the hash map.
^ Space Complexity: O(n), for storing the hash map.
*/