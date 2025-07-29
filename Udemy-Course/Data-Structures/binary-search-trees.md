# Trees
- What is a Tree?
  - A DS that consisits of nodes, but in a parent/ child relationship.
  - Need to have 1 entry point, the root.
  - `Child`: a node directly connected to another node
  - `Sibling`: A group of nodes with the same parent.
  - `Leaf`: A node with no children.
  - `Edge`: The connection between one node and another.

- Lists vs Trees
  - **Lists** = Linear
  - Lists only have 1 path through
  
  - **Trees** = non-linear
  - Trees have multiple paths through

---
- Uses: 
  - HTML DOM
  - Network Routing
  - Abstract Syntax Trees
  - Artificial Intelligence 
    - Minimax Tree
    - Decision Tree
  - Folder Structer in Computer File Systems
  - Json (Javascript object notation) 
- Kinds of Trees:
    - There are many main-category Trees, and sub/niche trees that fall in those categories.
    - We will focus on: 
      - Tree
      - Binary Tree
      - Binary Search Tree

# Binary Search Tree
  - Used to store sortable/comparable data.
  - Sorted
  - Every Parent Node has only at most **2** children.
  - Every left child node is **always less** than the parent node.
  - Every right child node is **always greater** than the parent node.
  - Easy lookup/Search, and Insertion.
  - We have a sorted DS, when the comparison is done, we eliminate **"half"** of what needs to be traversed/checked/compared at each comparison.
---

## Binary Search Tree Class 
```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }
}

var tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
```

## Insert Method:
- Create a new Node
- Starting at root... (Iteratively or Recursively)
  - Check if there is a root,
  - If no: the root is now the new Node.
  - If there is a root, check if the val of the new Node is greater than or less than the value of the root.
    - If it is greater: 
    - Check if there is a right node:
      - If there is:
      move to that node and repeat these steps
      - If there is not:
      add that node as the right property.
    - If it is less:
    - Check if there is a left node.
      - If there is:
      move to that node and repeat these steps.
      - If there is not:
      add that node as the left property 
- return the tree

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySerachTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // When inserting a duplicate, we chose to ignore
        if (value === current.value) return undefined;
        
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root == null) return false;
    let current = this.root;
    let found = false;
    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

```

## Find/Search/ContainsNode Method:
(Similar to to Search, use greater or less than checks, to determine left or right traversal. See Search Pseudocode)
- Starting at the root:
- Check if there is a root, if not, done searching!
- If there is a root, check if the value of the...
- .
- ..
- ...
- .... 


## Big O:
| Big - O  |          |
|----------|----------|
|Insertion | O(log n) |
|Searching | O(log n) |


(Not guarenteed, If you use a BST improperly that is weighted, or, only one-sided, it will be O(n))