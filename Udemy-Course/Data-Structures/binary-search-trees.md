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