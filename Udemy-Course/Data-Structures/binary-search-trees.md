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



# Remove Challenge:
### The "Family Tree" Analogy
- Imagine you're removing someone from a family tree, but you need to maintain all the family relationships:

- Find the person AND remember their parent (you can't just find them - you need to know who they're connected to)
Handle based on how many "children" they have:

---
- ***No kids (leaf)***: Just remove them, tell parent they're gone
- ***One kid***: The child takes their place in the family line
- ***Two kids***: Find their "successor" (next oldest family member) to take their place
---

- 🔍 Always track the parent - This is what you were missing! You can't reconnect the tree without knowing the parent.
- 🎯 Three distinct patterns - Each case has a clear, simple solution:
---
- 0 children → just delete
- 1 child → promote the child
- 2 children → find replacement, then delete replacement

🔄 Case 3 is really Case 1 or 2 in disguise - When you have two children, you copy the successor's value and then delete the successor (which will have 0 or 1 children).
### Visual Example:
```
Remove 10 from:     →     Result:
      15                    15
     /  \                  /  \  
   10    20              12    20
  / \      \            /        \
 1  12      50         1          50
    /                    \
   5                      5
```
The successor of 10 is 12 (smallest in right subtree). We replace 10's value with 12, then remove the original 12 node.

## Solution
```js
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    
    remove(value) {
        if (!this.root) return undefined;
        
        // Step 1: Find the node AND its parent
        let current = this.root;
        let parent = null;
        let found = false;
        
        // Navigate to find the target node
        while (current && !found) {
            if (value < current.value) {
                parent = current;
                current = current.left;
            } else if (value > current.value) {
                parent = current;
                current = current.right;
            } else {
                found = true; // Found it!
            }
        }
        
        if (!found) return undefined;
        
        // Step 2: Handle the three removal cases
        
        // CASE 1: Node has no children (leaf node)
        if (!current.left && !current.right) {
            if (!parent) {
                // Removing the root and it's the only node
                this.root = null;
            } else if (parent.left === current) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        
        // CASE 2: Node has exactly one child
        else if (!current.left || !current.right) {
            // Figure out which child exists
            const child = current.left || current.right;
            
            if (!parent) {
                // Removing the root with one child
                this.root = child;
            } else if (parent.left === current) {
                parent.left = child;
            } else {
                parent.right = child;
            }
        }
        
        // CASE 3: Node has two children
        else {
            // Find the successor (smallest value in right subtree)
            let successorParent = current;
            let successor = current.right;
            
            // Go left as far as possible in the right subtree
            while (successor.left) {
                successorParent = successor;
                successor = successor.left;
            }
            
            // Replace current node's value with successor's value
            current.value = successor.value;
            
            // Now remove the successor (which has at most one child)
            if (successorParent === current) {
                // Successor was immediate right child
                successorParent.right = successor.right;
            } else {
                // Successor was deeper in the tree
                successorParent.left = successor.right;
            }
        }
        
        return current;
    }
    
    // Helper method to visualize the tree
    display() {
        if (!this.root) {
            console.log("Empty tree");
            return;
        }
        
        const printLevel = (nodes) => {
            const nextLevel = [];
            let output = "";
            
            for (let node of nodes) {
                if (node) {
                    output += node.value + " ";
                    nextLevel.push(node.left, node.right);
                } else {
                    output += "null ";
                    nextLevel.push(null, null);
                }
            }
            
            console.log(output.trim());
            
            if (nextLevel.some(node => node !== null)) {
                printLevel(nextLevel);
            }
        };
        
        printLevel([this.root]);
    }
}

// Let's test with the examples from the exercise
console.log("=== Test 1: Remove leaf node (50) ===");
const bst1 = new BinarySearchTree();
bst1.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

console.log("Before removing 50:");
bst1.display();

bst1.remove(50);
console.log("\nAfter removing 50:");
bst1.display();
console.log("Root right value:", bst1.root.right.value); // Should be 20
console.log("Root right.right:", bst1.root.right.right); // Should be null

console.log("\n=== Test 2: Remove node with one child (1) ===");
const bst2 = new BinarySearchTree();
bst2.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);

bst2.remove(1);
console.log("After removing 1:");
console.log("Root left.left value:", bst2.root.left.left.value); // Should be 5

console.log("\n=== Test 3: Remove node with two children (10) ===");
const bst3 = new BinarySearchTree();
bst3.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50)
    .insert(60).insert(30).insert(25).insert(23).insert(24).insert(70);

console.log("Before removing 10:");
bst3.display();

bst3.remove(10);
console.log("\nAfter removing 10:");
bst3.display();
console.log("Root left value:", bst3.root.left.value); // Should be 12
```