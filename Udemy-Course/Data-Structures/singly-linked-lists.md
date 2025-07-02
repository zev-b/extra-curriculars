## Singly Linked Lists
- What are they?
    - An ordered list of data, that contains a **head**, **tail** and **length** property.
    
    - Consist of nodes, and each **node** has a value and a **pointer** to another node or **null**.
    
    - Stairs instead of an 'elevator' (like an array).
    
    - Uni-directional traversal only (Singly).


- Comparisons with Arrays:
    
    | Lists |  | Arrays |
    | --------- | - | ----------- |
    | No Indices | - | Indexed in order |
    | Connected via nodes with a pointer | - | Insertion & Deletion can be expensive |
    | Random access is not allowed | - | Can quickly be accessed at any specific index |

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
        // see upcoming pseudocode
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
3. If there is no head (empty list), set the head and tail to be the newly created node.
4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node. 
5. Increment length by one.