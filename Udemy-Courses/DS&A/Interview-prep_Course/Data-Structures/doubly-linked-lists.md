| Doubly-Linked-Lists   ->  | Table of Contents          |
| ------------------------- | -------------------------: |
| [Syntax](#setting-up-node-classes)         | [Get](#get-method)         |
| [Push](#push-method)      | [Set](#set-method)         |
| [Pop](#pop-method)        | [Insert](#insert-method)   |
| [Shift](#shift-method)    | [Remove](#remove-method)   |
| [Unshift](#unshift-method)| [Reverse](#reverse-method) |
| **[All Together](#all-together)** |                |
| [Big-O](#big-o)           |
| [Pseudos](#pseudos-condensed)

# Doubly-Linked-Lists

> We have an additional pointer in the mix...
>> `.prev` 

- This impacts operations we have previously encountered regarding a singly-linked.

- Since we can traverse backwards, with `.prev`, we have a different method of implementing the operations.

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

1. If length is 0, return undefined.
2. Store the current head property ina variable we'll call oldHead.
3. If the length is 1:
    - Set the head to be null.
    - Set the tail to be null.
4. Update the head to be the next of the old head.
5. Set the head's prev property to null.
6. Set the oldHead's next prop to be null.
7. Decrement length.
8. Return old head


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
        
    }
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;

        return oldHead;
    }
}
```

## Unshift Method
- adding to beginning

1. Create a new node with the val passed in.
2. If the length is 0:
   1. Set the head to be the new node.
   2. Set the tail to the new node.
3. Otherwise
   1. Set the prev property on the head to be the new node.
   2. Set the next property on the new node to be the head property
   3. Update the head to be the new node.
4. Increment length
5. Return `this`

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
        
    }
    shift() {
        
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }
}
```

## Get Method 
1. If the index is less than 0 or greater than or equal to length, return null.
2. If the index is less than or equal to half the length of the list:
   1. Loop through the list starting from the head towards the middle.
   2. Return the node once it is found.
3. If the index is greater than half the length of the list:
   1. Loop through the list backwards, from the tail towards the middle.
   2. Return the node once it is found.

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
        
    }
    shift() {
        
    }
    unshift(val) {
      
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
}
```

## Set Method
1. Create a var which is the result of calling the `get()` method at the index passed to the function.
   1. If the `get()` method returns a valid node, set the val of that node to be the value passed to the function.
   2. Return true.
2. Otherwise return false.

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
        
    }
    shift() {
        
    }
    unshift(val) {
        
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(idx, val) {
        let foundNode = this.get(idx); // call get()
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
}
```

## Insert Method
1. If the index is less than zero or greater than equal to the length, return false.
2. If the index is 0, `unshift()`
3. If the index is the same as the length, `push()`.
4. Use the `get()` method to access the index -1.
5. Set the next and prev properties on the correct nodes to link everything together.
6. Increment length.
7. Return true.



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
        
    }
    shift() {
        
    }
    unshift(val) {
        
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(idx, val) {
        let foundNode = this.get(idx); // call get()
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) !!return this.push(val);

        let newNode = new Node(val);
        // references
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;
        // connection changes
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
}
```

## Remove Method
1. if the index is less than 0 or greater than or equal to the length return undefined.
2. If the index is 0, `shift()`
3. If the index is the same as the length - 1, `pop()`.
4. Use the `get(idx)` method to retrieve the item to be removed.
5. Update the next and prev properties to remove the found node from the list.
6. Set the next and prev to null on the found node.
7. Decrement length.
8. Return the removed node.


```js
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(val) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push() {

    }
    pop() {
        
    }
    shift() {
        
    }
    unshift(val) {
        
    }
    get(idx) {
    
    }
    set(idx, val) {

    }
    insert(idx, val) {

    }
    remove(idx) {
        if (idx < 0 | idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let removedNode = this.get(idx);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
}
```

## Reverse
1. Check if the list is empty or has one node.
   1. If so, return the list as-is (nothing to reverse).
2. Initialize a pointer current to point to the head of the list.
3. Swap the head and tail pointers.
    - Store the old head as the new tail.
    - Store the old tail as the new head.
4. Traverse the list:
    - While current is not null, do the following:
        1. Store current.next in a temporary variable temp.
        2. Swap current.next and current.prev.
           - current.next = current.prev
           - current.prev = temp
        3. Move current to the next node in the original direction, which is stored in temp.
- After the loop ends, all nodes have their pointers reversed.
5. Return the list.

```js
    // ...
    reverse() {
            if (!this.head) return this;

            let current = this.head;
            let temp = null;

            // Swap head and tail
            this.head = this.tail;
            this.tail = current;

            // Traverse and swap next and prev pointers
            while (current) {
                temp = current.next;
                current.next = current.prev;
                current.prev = temp;
                current = temp;
            }
            return this;
        }
```

### Big-O
- DLL vs SLL

| Big-O       |  DLL    | SLL |
|-------------|---------|-----------:|
| *Insertion* | O(1)    | O(n)       |
| *Removal*   | **O(1)**| O(1) or O(n) at end|
| *Searching* | O(n)    | O(n)       |
| *Access*    | O(n)    | O(n)       |

## All Together
```js
class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
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
    shift() {
        if (!this.head) return undefined;
        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;

        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;

        return this;
    }
    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        if (idx <= this.length / 2) {
            let count = 0;
            let current = this.head;
            while (count !== idx) {
                current = current.next;
                count++;
            }
            return current;
        } else {
            let count = this.length -1;
            let current = this.tail;
            while (count !== idx) {
                current = current.prev;
                count--;
            }
            return current;
        }
    }
    set(idx, val){
        let foundNode = this.get(idx);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(idx, val) {
        if (idx < 0 || idx > this.length) return false;
        if (idx === 0) return !!this.unshift(val);
        if (idx === this.length) !!return this.push(val);

        let newNode = new Node(val);
        // references
        let beforeNode = this.get(idx - 1);
        let afterNode = beforeNode.next;
        // connection changes
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }
    remove(idx) {
        if (idx < 0 | idx >= this.length) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();

        let removedNode = this.get(idx);

        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;

        removedNode.next = null;
        removedNode.prev = null;

        this.length--;
        return removedNode;
    }
    reverse() {
        if (!this.head) return this;

        let current = this.head;
        let temp = null;

        // Swap head and tail
        this.head = this.tail;
        this.tail = current;

        // Traverse and swap next and prev pointers
        while (current) {
            temp = current.next;
            current.next = current.prev;
            current.prev = temp;
            current = temp;
        }

        return this;
    }
}
```