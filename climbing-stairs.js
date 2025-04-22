/*

Climbing Stairs
You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

Return the number of distinct ways to climb to the top of the staircase.

Example 1:

Input: n = 2

Output: 2
Explanation:

1 + 1 = 2
2 = 2
Example 2:

Input: n = 3

Output: 3
Explanation:

1 + 1 + 1 = 3
1 + 2 = 3
2 + 1 = 3


Constraints:

1 <= n <= 30
 */


function climbStairs(n) {
    let one = 1;
    let two = 1;

    for (let i = 0; i < n - 1; i++) {
        console.log(`== one, == two ==\n ${one} - ${two}`);
        
        let temp = one;
        console.log("\n == temp == ", temp)
        
        one = one + two;
        console.log("\n :one: ", one);
        
        two = temp;
        console.log("\n :two: ", two);
        
    }
    console.log("\n == ans: one == ", one);
    return one;
}

console.log(climbStairs(5));
// console.log(climbStairs(3));