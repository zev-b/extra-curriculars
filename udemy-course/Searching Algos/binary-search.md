## Binary Search is much faster than Linear-Search...
### __But__ it only works on a __sorted__ array.

## O(log n) Time

We eliminate half of the elements ea ime by halving the indices we check based off < or > than, since it is sorted.

Divide & Conquer...

declare a Left and Right, choose a middle point between the pointers, check val against middle, than redetermine left or right based on this check of val against middle point.

```js
Pseudocode: 
// Create 2 vars, Left pointer (0), and Right (length -1)
// Loop while left is < right...
//     Create middle pointer (either round up or down, but choose 1)
//     if middle is target val - return indx
//     if middle is < move left pointer up
//     if middle is > move right pointer down
// if not found, return -1
```

```js
function binarySearch(arr, val){
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      
      if (arr[middle] === val) return middle;
      if (arr[middle] < val) left = middle + 1;
      else right = middle - 1;
  }
  return -1;
}
```
Additional Implementaion: 
```js
function binarySearch(arr, val) {
    let start = 0;
    let end = arr.length -1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== val && start <= end) {
        if (val < arr[middle]) end = middle -1;
        else start = middle + 1;
        middle = Math.floor((strat + end) / 2);
    }
    return arr[middle] === val ? middle : -1;
}
```