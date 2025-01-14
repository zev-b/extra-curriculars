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

### Practice Problem 3: *Intersection of Two Arrays*
```
Problem: Find the common elements between two arrays.
```
Solution Steps:
1. Use a hash set to store elements from one array.
2. Iterate through the second array and check if an element exists in the set.
3. Return the common elements.
```javascript
function intersection(nums1, nums2) {
    const set1 = new Set(nums1);
    const result = [];

    for (let num of nums2) {
        if (set1.has(num)) {
            result.push(num);
            set1.delete(num); // Ensure no duplicates in the result
        }
    }

    return result;
}

// Example
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
```



## Step 2: Strings
*Strings are one of the most commonly used data structures in programming interviews.* 
- Let’s break this down:

- Concepts to Understand

- __Characteristics__:

   - Strings are immutable in most languages like JavaScript.
   - They are essentially arrays of characters.

__Common Operations__:

__Accessing characters__: 
𝑂(1) using indexing.

__Searching substrings__: 
𝑂(𝑛) for simple checks, 
𝑂(𝑛⋅𝑚) for pattern matching, 
𝑂(𝑛) using advanced algorithms like KMP.

__Concatenation__: 
𝑂(𝑛+𝑚), where 
𝑛,𝑚 are the lengths of the strings.

__Useful Methods in JavaScript__:

|`.charAt(index)` | `.slice(start, end)` |
|-----------------|----------------------|
|`.substring(start, end)` | `.indexOf(substr)` |
|`.includes(substr)` | `.split(separator)` |
|`.join(separator)` | `.toUpperCase()` |
|`.toLowerCase()` | `.replace(pattern, replacement)` |
|`.trim()` |

__Example Problems__
### 1. Reverse a String
Reverse the characters of a string.

Steps:

- Convert the string to an array of characters using `.split('')`.
- Reverse the array using `.reverse()`.
- Join the reversed array back into a string.
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // Output: "olleh"
```
### 2. Check if a String is a Palindrome
A string is a palindrome if it reads the same backward as forward.

Steps:

- Use two pointers: one starting from the beginning and the other from the end.
- Compare the characters at the pointers and move inward.
- If any pair of characters doesn’t match, return false.
```javascript
function isPalindrome(str) {
    let left = 0, right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }

    return true;
}

// Example
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
```
### 3. Find the First Non-Repeating Character
Given a string, find the first character that does not repeat.

Steps:

- Use a hash map to store the frequency of each character.
- Iterate through the string to check for the first character with a frequency of 1.
```javascript
function firstNonRepeatingCharacter(str) {
    const frequencyMap = new Map();

    for (const char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    for (let i = 0; i < str.length; i++) {
        if (frequencyMap.get(str[i]) === 1) {
            return str[i];
        }
    }

    return null; // Return null if no non-repeating character is found
}

// Example
console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
console.log(firstNonRepeatingCharacter("aabb"));  // Output: null
```

__Practice Problems__
### 1. Anagram Check
Check if two strings are anagrams of each other (contain the same characters in a different order).

Steps:

Sort both strings and compare them.
```javascript
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    return s1.split('').sort().join('') === s2.split('').sort().join('');
}

// Example
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
```
### 2. Longest Substring Without Repeating Characters
Find the length of the longest substring without repeating characters.

Steps:

- Use the sliding window technique:
- Maintain a set to store characters of the current substring.
- Use two pointers to expand/shrink the window.
- Update the maximum length when expanding the window.
```javascript
function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1 ("b")
```
### 3. Count and Say
Given an integer 𝑛, generate the nth term of the count-and-say sequence.

Steps:

- Start with "1" for 𝑛=1.
- For each subsequent term:
- Count consecutive characters in the previous term.
- Build the next term based on counts and values.

```javascript
function countAndSay(n) {
    if (n === 1) return "1";

    let prev = countAndSay(n - 1);
    let count = 1, result = "";

    for (let i = 0; i < prev.length; i++) {
        if (prev[i] === prev[i + 1]) {
            count++;
        } else {
            result += count + prev[i];
            count = 1;
        }
    }

    return result;
}

// Example
console.log(countAndSay(1)); // Output: "1"
console.log(countAndSay(4)); // Output: "1211"
```



## Step 3: Linked Lists
*Linked lists are fundamental data structures in computer science. They are often tested in interviews due to their simplicity and versatility.*

### Concepts to Understand
- Definition:

    *A linked list is a linear data structure where each element (node) points to the next.*
- Types:
    - Singly Linked List: Nodes have a single pointer to the next node.
    - Doubly Linked List: Nodes have pointers to both the previous and next nodes.
    - Circular Linked List: The last node points back to the head.
- Common Operations:

- Traversal
- Insertion (at the head, tail, or middle)
- Deletion (by value or position)
- Reversal

### Node Structure: In JavaScript, a node can be represented as:

```javascript
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
```

### Linked List Structure:
```javascript
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
}
```

## Example Problems
### 1. Reverse a Linked List
Problem: Reverse a singly linked list.

Steps:

- Use three pointers: prev, current, and next.
- Traverse the list and reverse the direction of the pointers.
- Set the last node as the new head.

```javascript
function reverseLinkedList(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next; // Store next node
        current.next = prev;     // Reverse the pointer
        prev = current;          // Move prev forward
        current = next;          // Move current forward
    }

    return prev; // New head
}

// Example Usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
let reversedHead = reverseLinkedList(head);

// Print reversed list
while (reversedHead) {
    console.log(reversedHead.value); // Output: 3 -> 2 -> 1
    reversedHead = reversedHead.next;
}
```

### 2. Detect a Cycle in a Linked List
Problem: Determine if a linked list has a cycle (a node points back to a previous node).

Steps:

- Use two pointers: a slow pointer (slow) and a fast pointer (fast).
- Move slow by one step and fast by two steps.
- If they meet, a cycle exists. If fast reaches the end, no cycle exists.

```javascript
function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) return true; // Cycle detected
    }

    return false; // No cycle
}

// Example Usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = head.next; // Creates a cycle
console.log(hasCycle(head)); // Output: true
```

### 3. Merge Two Sorted Linked Lists
Problem: Merge two sorted linked lists into a single sorted linked list.

Steps:

- Use a dummy node to simplify handling the head.
- Compare the values of nodes from both lists.
- Attach the smaller node to the result and advance the pointer.

```javascript
function mergeTwoLists(list1, list2) {
    let dummy = new Node(-1); // Dummy node
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.value < list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach remaining nodes
    current.next = list1 !== null ? list1 : list2;

    return dummy.next; // Return merged list (skip dummy node)
}

// Example Usage
const list1 = new Node(1);
list1.next = new Node(3);
list1.next.next = new Node(5);

const list2 = new Node(2);
list2.next = new Node(4);
list2.next.next = new Node(6);

let mergedList = mergeTwoLists(list1, list2);

// Print merged list
while (mergedList) {
    console.log(mergedList.value); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    mergedList = mergedList.next;
}
```
Practice Problems
### 1. Find the Middle of a Linked List
Steps:

- Use two pointers: a slow pointer (slow) and a fast pointer (fast).
- Move slow one step at a time and fast two steps at a time.
- When fast reaches the end, slow will be at the middle.

```javascript
function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow; // Middle node
}

// Example Usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log(findMiddle(head).value); // Output: 3
```
### 2. Remove Nth Node from End of List
Steps:

- Use two pointers: first and second.
- Move first 𝑛 steps ahead.
- Move both pointers one step at a time until first reaches the end.
`second.next` will point to the node to be removed.

```javascript
function removeNthFromEnd(head, n) {
    let dummy = new Node(-1);
    dummy.next = head;
    let first = dummy, second = dummy;

    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    second.next = second.next.next; // Remove nth node

    return dummy.next; // Return updated list
}

// Example Usage
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let updatedList = removeNthFromEnd(head, 2);

// Print updated list
while (updatedList) {
    console.log(updatedList.value); // Output: 1 -> 2 -> 3 -> 5
    updatedList = updatedList.next;
}
```



## Step 4: Stacks
*A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. This means that the last item added to the stack is the first to be removed. Think of a stack of plates—when you add a new plate, it goes on top, and when you remove a plate, you take the top one first.*

### Concepts to Understand
Common Operations:

- Push: Add an element to the top of the stack.
- Pop: Remove and return the top element from the stack.
- Peek/Top: Return the top element without removing it.
- isEmpty: Check if the stack is empty.
- Size: Return the number of elements in the stack.

Applications:

- Function calls (call stack).
- Undo/Redo functionality in text editors.
- Parsing expressions (e.g., checking balanced parentheses).
- Backtracking problems (e.g., solving mazes, DFS in graphs).
- Implementation: Stacks can be implemented using arrays or linked lists.

Stack Implementation in JavaScript
Using an array:

```javascript
class Stack {
    constructor() {
        this.stack = [];
    }

    push(element) {
        this.stack.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.stack.pop();
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

// Example Usage
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop());  // Output: 20
console.log(stack.size()); // Output: 1
```

## Example Problems
### 1. Valid Parentheses
Problem: Given a string containing (), {}, and [], determine if the input string is valid (each opening bracket has a matching closing bracket in the correct order).

Steps:

- Use a stack to store opening brackets.
- Traverse the string:
- If it's an opening bracket, push it onto the stack.
- If it's a closing bracket, check if the top of the stack matches it. If not, return false.
- At the end, the stack should be empty for a valid string.

```javascript
function isValidParentheses(s) {
    const stack = [];
    const mapping = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (let char of s) {
        if (char in mapping) {
            const topElement = stack.length > 0 ? stack.pop() : "#";
            if (topElement !== mapping[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Example Usage
console.log(isValidParentheses("()"));       // Output: true
console.log(isValidParentheses("([{}])"));   // Output: true
console.log(isValidParentheses("(]"));       // Output: false
```
### 2. Min Stack
Problem: Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Steps:

- Maintain two stacks:
    - One for the elements (stack).
    - One for the minimum values (minStack).
- On push, compare the new element with the current minimum and update the minStack.
- On pop, also pop from the minStack.

```javascript
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(x) {
        this.stack.push(x);
        if (this.minStack.length === 0 || x <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(x);
        }
    }

    pop() {
        if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example Usage
const minStack = new MinStack();
minStack.push(3);
minStack.push(5);
console.log(minStack.getMin()); // Output: 3
minStack.push(2);
minStack.push(1);
console.log(minStack.getMin()); // Output: 1
minStack.pop();
console.log(minStack.getMin()); // Output: 2
```

### 3. Evaluate Reverse Polish Notation
Problem: Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). Valid operators are +, -, *, /. Operands may be integers.

Steps:

- Use a stack to store numbers.
- Traverse the tokens:
- If it's a number, push it onto the stack.
- If it's an operator, pop the top two numbers, apply the operator, and push the result.
- At the end, the stack will contain a single value.

```javascript
function evalRPN(tokens) {
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token));
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch (token) {
                case "+":
                    stack.push(a + b);
                    break;
                case "-":
                    stack.push(a - b);
                    break;
                case "*":
                    stack.push(a * b);
                    break;
                case "/":
                    stack.push(Math.trunc(a / b));
                    break;
            }
        }
    }

    return stack[0];
}

// Example Usage
console.log(evalRPN(["2", "1", "+", "3", "*"]));       // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"]));      // Output: 6
console.log(evalRPN(["10", "6", "9", "3", "/", "*", "-"])); // Output: 4
```

## Practice Problems
### 1. Next Greater Element
Find the next greater element for each element in an array.

### 2. Simplify Path
Given a Unix-style path, simplify it (e.g., /home/.././folder → /folder).

### 3. Largest Rectangle in Histogram
Given an array of bar heights, find the largest rectangular area that can fit under the histogram.




## Step 5: Queues
*A queue is a linear data structure that follows the FIFO (First In, First Out) principle. This means that the first element added to the queue is the first to be removed. Think of a queue of people at a ticket counter—people are served in the order they arrive.*

### Concepts to Understand
Common Operations:

- Enqueue: Add an element to the rear of the queue.
- Dequeue: Remove and return the element from the front of the queue.
- Peek/Front: Return the element at the front without removing it.
- isEmpty: Check if the queue is empty.
- Size: Return the number of elements in the queue.

Applications:

- CPU scheduling.
- Breadth-First Search (BFS) in graphs/trees.
- Printing tasks.
- Handling asynchronous tasks (e.g., message queues).
- Implementation: Queues can be implemented using arrays or linked lists.

Queue Implementation in JavaScript
Using an array:

```javascript
class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.queue.shift();
    }

    peek() {
        if (this.isEmpty()) return "Queue is empty";
        return this.queue[0];
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }
}

// Example Usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.peek()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.size());   // Output: 1
```

## Example Problems
### 1. Implement a Circular Queue
Problem: Design a circular queue that supports the operations:

- enqueue: Adds an item if the queue is not full.
- dequeue: Removes an item if the queue is not empty.
- isFull: Checks if the queue is full.
- isEmpty: Checks if the queue is empty.

```javascript
class CircularQueue {
    constructor(k) {
        this.queue = new Array(k).fill(null);
        this.size = k;
        this.front = 0;
        this.rear = 0;
        this.count = 0;
    }

    enqueue(value) {
        if (this.isFull()) return false;
        this.queue[this.rear] = value;
        this.rear = (this.rear + 1) % this.size;
        this.count++;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) return false;
        this.queue[this.front] = null;
        this.front = (this.front + 1) % this.size;
        this.count--;
        return true;
    }

    peekFront() {
        return this.isEmpty() ? null : this.queue[this.front];
    }

    isFull() {
        return this.count === this.size;
    }

    isEmpty() {
        return this.count === 0;
    }
}

// Example Usage
const cq = new CircularQueue(3);
cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
console.log(cq.enqueue(4)); // Output: false (queue is full)
cq.dequeue();
cq.enqueue(4);
console.log(cq.peekFront()); // Output: 2
```

### 2. Moving Average from Data Stream
Problem: Calculate the moving average of the last n elements in a stream of numbers.

```javascript
class MovingAverage {
    constructor(size) {
        this.size = size;
        this.queue = [];
        this.sum = 0;
    }

    next(value) {
        this.queue.push(value);
        this.sum += value;

        if (this.queue.length > this.size) {
            this.sum -= this.queue.shift();
        }

        return this.sum / this.queue.length;
    }
}

// Example Usage
const ma = new MovingAverage(3);
console.log(ma.next(1)); // Output: 1.0
console.log(ma.next(10)); // Output: 5.5
console.log(ma.next(3)); // Output: 4.67
console.log(ma.next(5)); // Output: 6.0
```

### 3. Breadth-First Search (BFS)
Problem: Given a binary tree, return the level order traversal (values at each level from left to right).

```javascript
function bfs(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const level = [];
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(level);
    }

    return result;
}

// Example Usage
const tree = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: { val: 3, left: null, right: null }
};

console.log(bfs(tree)); // Output: [[1], [2, 3]]
```
### Practice Problems
- Design Hit Counter: Count hits in the last 5 minutes in a stream of timestamped requests.

- Sliding Window Maximum: Given an array, find the maximum value in every sliding window of size k.

- Rotting Oranges: Simulate rotting oranges in a grid and determine the time it takes for all to rot.




## Step 6: Priority Queues
A priority queue is a type of queue where each element is associated with a priority, and elements with higher priority are dequeued before those with lower priority. If two elements have the same priority, they follow the FIFO order.

Concepts to Understand
Operations:

- Insert: Add an element with a priority.
- Extract Max/Min: Remove the element with the highest or lowest priority.
- Peek: Retrieve the element with the highest/lowest priority without removing it.

Applications:

Task scheduling in operating systems.
Pathfinding algorithms (e.g., Dijkstra's algorithm).
Huffman coding for data compression.
Implementation:

Can be implemented using arrays, but heaps are more efficient.

Priority Queue Implementation in JavaScript
Using a min-heap for a priority queue:

```javascript
class MinHeap {
    constructor() {
        this.heap = [];
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            this._swap(parentIndex, index);
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            if (smallest === index) break;
            this._swap(index, smallest);
            index = smallest;
        }
    }

    insert(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

// Example Usage
const pq = new MinHeap();
pq.insert(5);
pq.insert(3);
pq.insert(8);
console.log(pq.peek());       // Output: 3
console.log(pq.extractMin()); // Output: 3
console.log(pq.peek());       // Output: 5
```
### Practice Problems
- K Closest Points to Origin: Find the k closest points to the origin (0, 0).

- Merge K Sorted Lists: Merge k sorted linked lists into one sorted list.

- Dijkstra's Algorithm: Find the shortest path in a graph from a source to all other vertices.




## Step 7: HashMaps and HashSets
HashMaps
A HashMap (or dictionary) is a data structure that stores key-value pairs, enabling quick lookups, insertions, and deletions. Hashing is used to compute an index for keys, allowing O(1) average time complexity.

HashMap in JavaScript
```javascript
// JavaScript has a built-in Map object.
const map = new Map();

// Insertion
map.set("name", "Alice");
map.set("age", 25);

// Lookup
console.log(map.get("name")); // Output: Alice

// Deletion
map.delete("age");

// Checking presence
console.log(map.has("name")); // Output: true

// Iterating
for (const [key, value] of map) {
    console.log(key, value);
}
```
Practice Problems for HashMaps
Two Sum: Find two numbers in an array that add up to a target sum.

```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}
```
Group Anagrams: Group words that are anagrams of each other.

```javascript
function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split("").sort().join("");
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}
```
HashSets
A HashSet is a collection of unique elements, often implemented using hashing.

HashSet in JavaScript
```javascript
// JavaScript has a built-in Set object.
const set = new Set();

// Insertion
set.add(10);
set.add(20);

// Lookup
console.log(set.has(10)); // Output: true

// Deletion
set.delete(20);

// Iterating
for (const value of set) {
    console.log(value);
}
```
Practice Problems for HashSets
Contains Duplicate: Check if an array contains any duplicate numbers.

```javascript
function containsDuplicate(nums) {
    const set = new Set();
    for (const num of nums) {
        if (set.has(num)) return true;
        set.add(num);
    }
    return false;
}
```

Longest Consecutive Sequence: Find the length of the longest consecutive sequence in an array.

```javascript
function longestConsecutive(nums) {
    const set = new Set(nums);
    let maxLength = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let length = 1;

            while (set.has(currentNum + 1)) {
                currentNum++;
                length++;
            }

            maxLength = Math.max(maxLength, length);
        }
    }

    return maxLength;
}
```
## Step 8: Trees
A Tree is a hierarchical data structure consisting of nodes. The topmost node is the root, and each node may have child nodes.

Binary Tree Implementation
```javascript
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

// Example Tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
```

Tree Traversals
Preorder (Root, Left, Right):

```javascript
function preorderTraversal(node) {
    if (!node) return [];
    return [node.value, ...preorderTraversal(node.left), ...preorderTraversal(node.right)];
}
```

Inorder (Left, Root, Right):

```javascript
function inorderTraversal(node) {
    if (!node) return [];
    return [...inorderTraversal(node.left), node.value, ...inorderTraversal(node.right)];
}
```

Postorder (Left, Right, Root):

```javascript
function postorderTraversal(node) {
    if (!node) return [];
    return [...postorderTraversal(node.left), ...postorderTraversal(node.right), node.value];
}
```

Practice Problems
Maximum Depth of Binary Tree:

```javascript
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
```

Path Sum: Check if the tree has a root-to-leaf path with a given sum.

```javascript
function hasPathSum(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return root.value === sum;
    return hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value);
}
```

Step 9: Binary Search Trees (BST)
A Binary Search Tree is a binary tree where:

- The left subtree contains nodes with values smaller than the root.
- The right subtree contains nodes with values greater than the root.

Insert into a BST
```javascript
function insertIntoBST(root, value) {
    if (!root) return new TreeNode(value);
    if (value < root.value) root.left = insertIntoBST(root.left, value);
    else root.right = insertIntoBST(root.right, value);
    return root;
}
```

Search in a BST
```javascript
function searchBST(root, value) {
    if (!root || root.value === value) return root;
    return value < root.value ? searchBST(root.left, value) : searchBST(root.right, value);
}
```

Practice Problems
Validate BST: Check if a tree is a valid BST.

```javascript
function isValidBST(root, min = null, max = null) {
    if (!root) return true;
    if ((min !== null && root.value <= min) || (max !== null && root.value >= max)) return false;
    return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}
```
Lowest Common Ancestor in BST: Find the LCA of two nodes.

## Step 10: Graphs
Graphs consist of nodes (vertices) and edges connecting them. Graphs can be:

- Directed or Undirected.
- Weighted or Unweighted.

Graph Representation
Adjacency List:

```javascript
const graph = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1],
};
```

Adjacency Matrix:

```javascript
const matrix = [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
];
```

Graph Traversals
Breadth-First Search (BFS):

```javascript
function bfs(graph, start) {
    const visited = new Set();
    const queue = [start];
    const result = [];

    while (queue.length) {
        const node = queue.shift();
        if (visited.has(node)) continue;
        visited.add(node);
        result.push(node);

        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) queue.push(neighbor);
        }
    }

    return result;
}
```

Depth-First Search (DFS):

```javascript
function dfs(graph, node, visited = new Set()) {
    if (visited.has(node)) return;
    visited.add(node);
    console.log(node);
    for (const neighbor of graph[node]) dfs(graph, neighbor, visited);
}
```