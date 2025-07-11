# Stacks

- What is a stack?
  - Abstract data structure that is a collection of data.
  - Follows **LIFO** principal.

- The Call Stack follows this principal, and is a Stack.

- Uses: 
  - Managing function invocations.
  - Undo / Redo actions for applications.
  - Routing (The history object for browser etc.).

- There is more than one way to implement a Stack.

## Array Implementation
```js
// 1
var stack = [];

stack.push("google.com");
stack.push("youtube.com");
stack.push("udemy.com");
//      1   -------------------->   3
// ["google.com", "youtube.com", "udemy.com"] 
//                                     |
stack.pop(); // "udemy.com"

// 2 (Inefficient)
var stack = []
stack.unshift("created new file");
stack.unshift("resized file");
stack.unshift("edited filename");
//           3  <------------------------   1
// ["edited filename", "resized file", "created new file"]
//         |
stack.shift(); // "edited filename"
```
- By arrays, adding and removing from the beginning, is inefficient, since all the other elements in the array needs to be re-indexed.
- Since in essence the whole utility of a stack is to add and then remove from the latest addition, there is no reason for indices that are built in for an array, since we don't use the indices anyways...

### So a better way to implement a Stack, is using a Singly Linked List...

## Singly Linked List Implementation
- We will have different names than `head` and `tail`, and instead of `length`, we will have `size`.
- We *cannot* recycle our SLL `push()` and `pop()` methods for our stack, since we need the methods to be an O(1) constant time execution, whereas the way we implemented these methods for SLL, they are O(n) since they iterate/traverse the list.
- So we can use the logic of the `shift()` and `unshift()` methods instead, to fulfill the need for constant execution.

### We will be adding and removing from the **beginning** of our list.
---
### Push Pseudocode:
1. Function accepts a value.
2. Create a new node with the value.
3. If there are no nodes in the stack, set the first and last properties to the new node.
4. If there is at least one node, create a variable that stores the current first property on the stack.
5. Reset the first property to be the new node.
6. Set the next property on the new node to be the previous first node variable
7. Increment size

### Pop Pseudocode:
1. If there are no nodes in the stack, return null.
2. Create a variable that stores the current first property on the stack.
3. If there is only 1 node, set the first and last property to be null.
4. If there is more than 1 node, set the first property to be the next property on the current first.
5. Decrement size
6. Return value of removed node.

---
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let oldFirst = this.first;
            this.first = newNode;
            this.first.next = oldFirst;
        }
        return ++this.size; 
    }
    // 1. My Implentation
    pop() {
        if (!this.first) return null;
        let removedNode = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = removedNode.next;
        }
        this.size--;

        return removedNode.value;
    }
    // 2. More concise, but less explicit
    pop() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        } 
        this.first = this.first.next;
        this.size--;

        return temp.value;
    }
}

var stack = new Stack();

stack.push("FIRST");  // 1
stack.push("SECOND"); // 2
stack.push("THIRD");  // 3

stack.pop(); // "THIRD"

```