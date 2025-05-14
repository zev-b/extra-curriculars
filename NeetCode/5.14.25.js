//* Linked List Blind 75 Practice

//* reverse a Linked List: 

/*
    Approach: Iteratively
=========================
1) Create 2 pointers
2) Set 1 to the currendNode and the 2nd will be a trailing pointer
3) While there are nodes left to reverse: 
    a) Create a temp var to track currentNode's NEXT val
    b) Set temp (currentNode's next val) to prevNode
    c) Update prevNode to be currentNode
    d) Update currentNode to be temp
4) Return prevNode at the end.

=========================
    O(n) time
    O(1) space
*/

const reverseList = head => {
    let node = head;
    let prevNode = null;

    while (node) {
        let ogNext = node.next;
        node.next = prevNode;
        node = ogNext;
    }
    return prevNode;
}

/* Recursively:
=========================
    O(n) time
    O(n) space   [call stack]
*/

const reverseListRecursively = head => {
    if (!head) return null;

    let newHead = head;

    if (head.next) {
        newHead = reverseListRecursively(head.next);
        head.next.next = head;
    }

    head.next = null;
    return newHead;
}