# Queues 

- A DS that is only for adding and removing
### FIFO. First In First Out manner.
---
### Use Cases
- Waiting to join an online game, Background Tasks on PC, Download/Uploading Resources, Printing processing.
- Can be inmplemented with an array and a LL class.
- It is lighter to be implemented with a Class, than an array.

## Array Implementation:
Since there is no way to avoid in ea circumstance re-indexing the rest of the array, its better to build a class.
```js
var q = [];

// Add to end, and Remove from beginning. 
q.push("First");
q.push("Second");
q.push("Third");

q.shift(); // "First"

// or Add to beginning, and Remove from end.
q.unshift("First")

q.pop(); // "First"
```
## Class Implementation:
### Enqueue: Adding to end (Push)
1. Func accepts a val
2. Create a new Node with the val
3. If no nodes in the queue, set new node to be first and last properties of queue.
4. Otherwise set the next property on the current last to be new Node, then set last property of the queue to be new Node
5. Increment size
6. Return 'new' size


Dequeue: Removing from beginning (Shift)
1. If there is no first property, return null.
2. Store first property in var
3. See if first is the same as last (Only 1 node) If so, set the last to be null.
4. (Otherwise) set the first property to be the next property of the first.
5. Decrement size.
6. Return the value of the dequeued node.
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newnode;
        } else {
            let currentLast = this.last;
            currentLast.next = newNode;
            this.last = newNode;
        }
        this.size++;

        return this.size;

    }
    dequeue() {
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
```

## Big O:
Insertion: O(1)
Removal: O(1)

- With the array, we have a cascade of re-indexing, so its not constant like the LL Class for a Queue.