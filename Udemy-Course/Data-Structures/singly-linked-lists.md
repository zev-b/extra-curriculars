| Table of Contents         |                            |
| ------------------------- | -------------------------: |
| [Syntax](#syntax)         | [Get](#get-method)         |
| [Push](#push-method)      | [Set](#set-method)         |
| [Pop](#pop-method)        | [Insert](#insert-method)   |
| [Shift](#shift-method)    | [Remove](#remove-method)   |
| [Unshift](#unshift-method)| [Reverse](#reverse-method) |
| **[All Together](#all-together-now)** |                |
| [Big-O](#big-O)           |


## Singly Linked Lists
- What are they?
    - An ordered list of data, that contains a **head**, **tail** and **length** property.
    
    - Consist of nodes, and each **node** has a value and a **pointer** to another node or **null**.
    
    - Stairs instead of an 'elevator' (like an array).
    
    - Uni-directional traversal only (Singly).


- Comparisons with Arrays:
    
| Lists      | Arrays       |
| :--------- | -----------: |
| No Indices | Indexed in order |
| Connected via nodes with a pointer | Insertion & Deletion can be expensive |
| Random access is not allowed | Can quickly be accessed at any specific index |

### Syntax
```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // see upcoming code
    }
}

// var first = new Node("hi");
// first.next = new Node("there,");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");


var list = new SinglyLinkedList();
list.push("Hello");
```

### Push Method
1. This func should accept a value
2. Create a new node using the value passed into the func.
3. If there is no head (edge-case of an empty list), set the head and tail to be the newly created node.
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node. 
5. Increment length by one.
6. Return the whole Linked List with *`this`*

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
```

### Pop Method
1. If there are no nodes in the list, return undefined.
2. Loop thru list until reach the tail, but set a variable to track the 2nd to last item.
3. Set the next property of the 2nd to last node to be null.
4. Set the tail to be the 2nd to last node.
5. Decrement length by 1
6. Return the value of the node removed.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        // Popping the last value in the list...
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}
```

### Shift Method
1. If no nodes, return undefined.
2. Store current head in a variable.
3. Set the head to be the current head's next.
4. Decrement the length by 1.
5. Return the value of the removed node.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
}
```

### Unshift Method

- Adding a new node to the beginning of the Linked List

1. This function accepts a val
2. Create a new node using the val passed to the function
3. If there is no head property to the list, set the head and tail to be the new node.
4. Otherwise set the new node's next prperty to be the current head prperty on the list
5. Set the head property on the list to be the new node
6. Increment the length
7. Return the linked list.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}
```

### Get Method
- Retrieving a node by it's position in the linked list

1. This function should accept an index
2. If the index is less tha zero or greater than or equal to the length of the list, return null.
3. Loop thru the list until you reach the index and return the node at that index.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        // ...
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
}
```

### Set Method
- Changing the **value** of a node based on it's position in the linked list.

1. Function accepts an index and a value.
2. Use the **`get()`** method to find the specific node.
3. If the node is not found, return false.
4. If the node is found, set the value of that node to be the value passed to the function and return true.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        // ...
    }
    get(idx) {
        // ...
    }
    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}
```

### Insert Method
- Adding a node to the List at a specific position.

1. Function accepts an index and a val.
2. If the index is less than zero or **greater** than the length, return false.
3. If the index is the same as the length, **`push(val)`** a new node to the end of the list.
4. If the index is 0, **`unshift()`** a new node to the start of the list.
5. Otherwise, using the **`get()`** method, access the node at the specified index -1, to get the val before the placement position.
6. Set the next property on that node to be the new node.
7. Increment length.
8. Return true.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        // ...
    }
    get(idx) {
        // ...
    }
    set(idx, val) {
        // ...
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val); // double-bang for boolean coercion return val
        if (idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(idx -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
}
```

### Remove Method
- Removing a node from the list at a specific position.

1. Function accapts an index.
2. If the index is less than zero or greater than the length, return undefined.
3. If the index is the same as the length -1, **`pop()`**
4. If the index is 0, **`shift()`**
5. Otherwise, using **`get()`** method, access the node at the index -1.
6. Set the next prperty on that prev node to be the next of the next node.
7. Decrement length.
8. Return the value of the node removed.

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        // ...
    }
    get(idx) {
        // ...
    }
    set(idx, val) {
        // ...
    }
    insert(idx, val) {
        // ...
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length -1) return this.pop(); 

        let prevNode = this.get(idx -1);
        let removed = prevNode.next;
        prevNode.next = removed.next
        this.length--;

        return removed;
    }
}
```

### Reverse Method
- Reversing the linked list **in-place**.

1. Create a var called node and initialize it to the head property.
2. Swap the head an tail.
3. Create a var called next.
4. Create a var called previous.
5. Loop thru the list.
6. Set next to be the next property on whatever node is.
7. Set the next property on the node to be whatever previous is.
8. Set previous to be the value of the node variable.
9. Set the node variable to be the value of the next variable.
10. Return *`this`*, the reversed list.


```javascript
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // ...
    }
    pop() {
        // ...
    }
    shift() {
        // ...
    }
    unshift(val) {
        // ...
    }
    get(idx) {
        // ...
    }
    set(idx, val) {
        // ...
    }
    insert(idx, val) {
        // ...
    }
    remove(idx) {
        // ...
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
```
## All Together Now: 

```javascript
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    set(idx, val) {
        let foundNode = this.get(idx);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === this.length) return !!this.push(val);
        if (idx === 0) return !!this.unshift(val);

        let newNode = new Node(val);
        let prev = this.get(idx -1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length -1) return this.pop(); 

        let prevNode = this.get(idx -1);
        let removed = prevNode.next;
        prevNode.next = removed.next
        this.length--;

        return removed;
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let next;
        let prev = null;
        
        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        let arr = [];
        let current = this.head;
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }
}
```

### Big-O


| Big-O       |  SLL    | Array |
|-------------|------|-----------:|
| *Insertion* | O(1) | O(n)       |
| *Removal*   | beg: O(1) end: O(n) | O(n) |
| *Searching* | O(n) | O(1)       |
| *Access*    | O(n) | O(1)       |

## Recap:
- SLL are excellant alternative to arrays when insertion and deletion at the beginning are frequently required.
- Arrays conatin a bulit in index, SLL do not.
- The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues.


## Pseudos Condensed: 

### `push()`
```md
1. This func should accept a value
2. Create a new node using the value passed into the func.
3. If there is no head (edge-case of an empty list), set the head and tail to be the newly created node.
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node.
5. Increment length by one.
6. Return the whole Linked List with `this`.
```
### `pop()`
```md
1. If there are no nodes in the list, return undefined.
2. Loop thru list until reach the tail, but set a variable to track the 2nd to last item.
3. Set the next property of the 2nd to last node to be null.
4. Set the tail to be the 2nd to last node.
5. Decrement length by 1
6. Return the value of the node removed.
```
### `get()`
```md
1. This function should accept an index
2. If the index is less tha zero or greater than or equal to the length of the list, return null.
3. Declare a counter var.
4. Loop thru the list until you reach the index and return the node at that index.
```
### `set()`
```md
1. Function accepts an index and a value.
2. Use the **`get()`** method to find the specific node.
3. If the node is not found, return false.
4. If the node is found, set the value of that node to be the value passed to the function and return true.
```

### `insert()`
```md
1. Function accepts an index and a val.
2. If the index is less than zero or **greater** than the length, return false.
3. If the index is the same as the length, **`push(val)`** a new node to the end of the list.
4. If the index is 0, **`unshift()`** a new node to the start of the list.
5. Otherwise, using the **`get()`** method, access the node at the specified index -1, to get the val before the placement position.
6. Set the next property on that node to be the new node.
7. Increment length.
8. Return true.
```
### `remove()`
```md
1. Function accapts an index.
2. If the index is less than zero or greater than the length, return undefined.
3. If the index is the same as the length -1, **`pop()`**
4. If the index is 0, **`shift()`**
5. Otherwise, using **`get()`** method, access the node at the index -1.
6. Set the next prperty on that prev node to be the next of the next node.
7. Decrement length.
8. Return the value of the node removed.
```
### `reverse()`

