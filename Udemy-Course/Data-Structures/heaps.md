# Binary Heaps
- Heaps are a type of Tree in a specific group.
- Similar to BST.
- **MaxBinaryHeap** - parent nodes are always larger than child nodes.
- **MinBinaryHeap** - parent nodes are always smaller than child nodes. 
- At most 2 children per node, but there is no order for left and right, just smaller(Max)/larger(Min) than parent.
- No guarentees between sibling nodes. No implied ordering between siblings.
- Binary Heap is as compact as possible so it takes up the least space, and left children are filled first.

- Uses: 
  - Commonly used for a Priority Queue
  - Graph Traversal Algos
- Implementations:
  - Can use a Tree/Node Class.
  - 
  - Can use a List/Array 
    - For any Index in the array `n`...
    - **L** Child stored at Index `2n + 1`
    - **R** Child stored at Index `2n + 2`
    - `[100, 19, 36, 17, 12, 25, 5, 9, 16, 6, 11, 13, 8, 1, 4]`
    - Can find Parent of Node, by reverse-engineering this formaula. `(n - 1) / 2` (floored).
    
    - Fill it out L to R child first.
    - Add to end...
    - Then Bubble up the Max Values (in MaxBinaryHeap), so we swap the values in the array to compensate. We compare each node with its parent to make sure its a Max or Min structure and swap accordingly.

### Insert Steps for an Array
1. Push the value to the values property on the Heap
2. Bubble up:
  1. Create a var called index which is the length of the values property `- 1`.
  2. Create a var called parentIndex which is the floor of `(index-1) / 2`
  3. Keep looping as long as the values element at the parentIndex is less than the values element at the child index
     1. Swap the value of the values element at the parentIndex with the value of the element property at the child index.
     2. Set the index to be the parentIndex, and start over.
---
```js
class MaxBinaryHeap {
   constructor() {
    this.values = [];
   } 
   insert(ele) {
    this.values.push(ele);
    this.bubbleUp();
   }
   bubbleUp() {
    let idx = this.values.length - 1;
    const ele = this.values[idx];
    while (idx > 0) {
        let parentIndex = Math.floor((idx -1) /2);
        let parent = this.values[parentIndex];
        if (ele <= parent) break;
        this.values[parentIndex] = ele;
        this.values[idx] = parent;
        idx = parentIndex;
    }
   }
}
```
---
### Removing From Heap (Either the max or min)
- Depending if its a MaxHeap or MinHeap, each of their root nodes, are their respective most high-priority value, either the Heap Min or Heap Max
- Conventionally called `extractMax`, or `extractMin`.
- Entails:
  - **Remove** the root
  - **Replace** with most recently added val
  - **Adjust**, sink the value down to correct position

- The Restoring/Adjusting of the Heap properties is called by all the following:
  - *bubble-down* 🫧
  - *percolate-down*
  - *sift-down*
  - *trickle-down* 💦
  - *heapify-down* 🫗
  - *cascade-down* ⬇️
  - *extract-min/max* 
  - *sink-down* 🚤
  - *drop-the-socks* (jk)

### Steps: `extractMax()`
1. Swap the first val in the values property with the last one.
2. Pop from the values property, so you can return the value at the end.
3. Have the new root "sink-down" to the correct spot.
   1. Your parent index starts at 0 (the root).
   2. Find the index of the **L** child: `2 * index + 1` (*make sure its not out of bounds*).
   3. Find the index of the **R** child: `2 * index + 2` (*make sure its not out of bounds*)
   4. If the L or R child is greater than the element...swap. If both L and R children are larger, swap with the largest child.
   5. The child index you swapped to now becomes the new parent index.
   6. Keep looping and swapping until neither child is larger than the lement.
   7. Return the old root



```js
class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        // Edge-case when removing last, don't re-insert infinitely
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const ele = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild > ele) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild > ele) || 
                    (swap !== null && rightChild > leftChild)
                   ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }
    }
}
```

# Priority Queue:
- A DS that ea el has a prority associated with it, and is served 1 at a time, based on the priority.
- Always serves th el with highest priority.
- Abstract concept that can be implemented with heaps, array, or a list.
- Iterate over DS and seek the highest priority contained in association with the elements.
- But iteration is naive approach.
- Remove from the top, and then heapify and sink down to restructure the priorities correctly.

### Pseudocode:
1. Write a MinBinaryHeap class. A lower number means higher priority.
2. Each Node has a val and a priority. Use the priority to build the heap.
3. **Enqueue** method accepts a value and a priority, makes a new node, and puts it in the right spot based off its priority.
4. **Dequeue** method removes root element, returns it, and rearranges heap using the priority of the elements in the heap.
5. Handling els with same priority level, by default we don't have logic with the minor changes from maxHeap, so we can add an `insertTime` to the node class and in comparison, we would factor a insertTime comparison as well, but we would have more factors to consider in actual use case for priority queue.

## Code using MinBinaryHeap:
```js
class Node {
    constructor(value) {
        this.value = value;
        this.priority = priority;
        this.insertTime = Date.now();
    }
}
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const ele = this.values[idx];
        while (idx > 0) {
            let parentIndex = Math.floor((idx -1) /2);
            let parent = this.values[parentIndex];
            if (ele.priority >= parent.priority) break; //* from '<'
            this.values[parentIndex] = ele;
            this.values[idx] = parent;
            idx = parentIndex;
        }
    }
    dequeue() {
        const min = this.values[0];    //* from 'max'
        const end = this.values.pop();
        // Edge-case when removing last, don't re-insert infinitely
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const ele = this.values[0];
        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < ele.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority < ele.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                   ) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = ele;
            idx = swap;
        }
    }
}
```

## Big O:
| Complexity    |          |
|---------------|----------|
| *Insertion*   | O(log n) |
| *Removal*     | O(log n) |
| *Search*      |   O(n)   |

- Each time we go down a level in the heap we have double amount of nodes, but we only have to compare to its parent. for 16 els, 4 comparisons. So its `Log base-2 of n`. Evaery doubling amount of nodes, we only increase the comparisons by 1. 
- Unlike a BST, a Binary Heap cant be an unbalanced tree, so its always O(log n).
- Searching is not optimal for Binary Heap, since we have no sibling associations between nodes in the heap. It would be better to use a BST if searching is needed.