/*
Problem Statement:

* Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.

?    Input: nums = [2, 7, 11, 15], target = 9
?    Output: [0, 1]
?    Explanation: nums[0] + nums[1] = 2 + 7 = 9

Constraints:

^- Each input will have exactly one solution.
^- You cannot use the same element twice.
*/

/*
The outer loop (i) iterates over each element in the array.
The inner loop (j) starts from i + 1 to avoid repeating pairs or using the same element twice.
If the sum of nums[i] + nums[j] matches the target, the indices [i, j] are returned.
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