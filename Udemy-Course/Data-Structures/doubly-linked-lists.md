| Doubly-Linked-Lists   ->  | Table of Contents          |
| ------------------------- | -------------------------: |
| [Syntax](#setting-up-node-classes)         | [Get](#get-method)         |
| [Push](#push-method)      | [Set](#set-method)         |
| [Pop](#pop-method)        | [Insert](#insert-method)   |
| [Shift](#shift-method)    | [Remove](#remove-method)   |
| [Unshift](#unshift-method)| [Reverse](#reverse-method) |
| **[All Together](#all-together-now)** |                |
| [Big-O](#big-O)           |
| [Pseudos](#pseudos-condensed)

# Doubly-Linked-Lists

> We have an additional pointer in the mix...
>> `.prev` 

- This impacts operations we have previously encountered regarding a singly-linked.

- Since we can traverse backwards, with `.prev`, we have a different method of implememnting the operations.

- We will have to update 2 pointers, so a little more work. 

- More memory is used since we are stroing 2 pointers now.

- Bi-directional traversals.

## Setting up Node Classes: 

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
// first.next.prev = first;    <-- Set both pointers 

// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

var list = new DoublyLinkedList();
list.push("Hello");

```


## Push Method
1. Create a new node with the value passed to the function.
2. If the head property is null, set the head and tail to be the newly created node.
3. If not, set the next property on the tail to be that node.
4. Set the previous property on the newly created node to be the tail.
5. Set the tail to be the newly created node.
6. Incrememnt the length.
7. Return the DLL with `this`

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
}
```

## Pop Method
1. If there is no head, return undefined.
2. Store current tail in a var to return later.
3. If the length is 1, set the head and tail to be null.
4. Update the tail to be the previous Node.
5. Set the newTail's `next` to null.
6. Decrement length.
7. Return removed node (old tail).

```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        // let newNode = new Node(val);
        // if (!this.head) {
        //     this.head = newNode;
        //     this.tail = newNode;
        // } else {
        //     this.tail.next = newNode;
        //     newNode.prev = this.tail;
        //     this.tail = newNode;
        // }
        // this.length++;

        // return this;
    }
    pop() {
        if (!this.head) return undefined;
        let removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;

        return removedNode;
    }
}
```

## Shift Method
- Removing from the beginning

1. 


```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
      
    }
    pop() {
        if (!this.head) return undefined;
        let removedNode = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        }
        this.length--;

        return removedNode;
    }
}
```