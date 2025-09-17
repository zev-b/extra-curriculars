#### Traversal in essence, is determining how to visit every node in the tree 1 time.

# DFS
    |
    V
There are 3 different orders in DFS...
### ***PreOrder***
`Mark Visited -> Explore its Left -> then Explore Right` 

**Steps Recursively:**
1. Create a var to store visited vals
2. Store the root of the BST in a var called current.
3. Write a helper function which accepts a node
   1. **Push the value of the node to the var that stores visited**
   2. If the node has a left property, call the helper func with the left property on the node
   3. If the node has a right property, call the helper func with the right property on the node.
4. Invoke the helper func with the current var
5. Return the array of visited vals.
```js
DFSPreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
        visited.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
}
```
---
### ***PostOrder***
`Explore Left -> Explore Right -> Mark Visited`

**Steps Recursively:**
- *Note: Only modified bold line order*
1. Create a var to store visited vals
2. Store the root of the BST in a var called current.
3. Write a helper function which accepts a node
   1. If the node has a left property, call the helper func with the left property on the node
   2. If the node has a right property, call the helper func with the right property on the node.

   3. **Push the value of the node to the var that stores visited**
4. Invoke the helper func with the current var
5. Return the array of visited vals.
```js
DFSPostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        visited.push(node.value); // moved here
    }

    traverse(this.root);
    return visited;
}
```
---
### ***InOrder***
`Explore Left -> Mark visited -> Explore Right`

**Steps Recursively:**
- *Note: Only modified bold line order*
1. Create a var to store visited vals
2. Store the root of the BST in a var called current.
3. Write a helper function which accepts a node
   1. If the node has a left property, call the helper func with the left property on the node
   2. **Push the value of the node to the var that stores visited**
   3. If the node has a right property, call the helper func with the right property on the node.

4. Invoke the helper func with the current var
5. Return the array of visited vals.

```js
DFSInOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node) {
        if (node.left) traverse(node.left);
        visited.push(node.value);
        if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
}
```


# BFS
    --->
**Steps Iteratively:**
1. Create a Queue and a variable to store visited nodes.
2. Place the root node in the queue.
3. Loop as long as there is anything in the queue.
   1. Dequeue a node from the queue and push the value of the node intothe variable for visited node.
   2. If there is a left property on the node dequeued - add it to the queue.
   3. If there is a right property on the node dequeued - add it to the queue. 
4. Return the variable that stores the values

```js
BFS() {
    let visited = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    
    while (queue.length) {
        node = queue.shift(); // FIFO
        visited.push(node.value);

        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return visited;
}
```


# DFS vs BFS
- We need to consider the space complexity of how the call stack will populate in the process of traversal, with our queue (or stack).
- Depending on how the tree is.
- Wide tree: BFS is bad
- Long Tree: DFS is bad

## Pre vs Post vs In Order:
- InOrder returns an in-order list.
- PreOrder can be used to clone, store, flatten a tree, then recreate from the serialized tree data later.