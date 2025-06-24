Not commonly used and not as efficient, although it does have a use case...

### The idea is that the larger values bubble to the top.

As we loop through, we compare a pair of values and compare to determine which is a larger value, then swap to compare to next.

We repeat the iterating process, ea time getting the next largest values to the end/top. With ea pass we bubble a single largest value to the top/end.

Swapping Functionality can be accomplished with: 
```js
// ES5
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES2015
const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
}
```

```js
// Bubble Sort Pseudocode:
/*
1. Start looping from end with a variable called i to beg
2. Inner loop with a variable called j from the beg to i - 1
3. If arr[j] is greater than arr[j+1], swap those 2 values (using any of the 2 techniques above)
4. Return the sorted array
*/
```

```js 
// Bubble Sort Implementation:
function bubbleSort(arr) {
    for (let i = arr.length; i < 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}
```

```js
// Optimization for Bubble Sort: 
// By setting a flag, we don't repeat when the arr is partially sorted instead of making extra passes after it is sorted already.
//  Generally O(n^2), but with a flag and partially/nearly sorted, its O(n)
function bubbleSort(arr) {
    let noSwaps;
    for (let i = arr.length; i < 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}
```

## Bubble Sort
ATTEMPT THIS IS YOU ARE UP FOR IT! Implement a function called bubbleSort. Given an array, bubbleSort will sort the values in the array. The function takes 2 parameters: an array and an optional comparator function.

function bubbleSort(arr, comparator) {
  if (typeof comparator !== 'function') {
    // provide a default
  }
}
The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Bubble sort is an O(n^2) algorithm. You can read more about it here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
```
Examples

bubbleSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
bubbleSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
bubbleSort([1, 2, 3]); // [1, 2, 3]
bubbleSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
bubbleSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
bubbleSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
var moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];
 
function oldestToYoungest(a, b) {
  return b.age - a.age;
}
 
bubbleSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
```
```js
function bubbleSort(arr, comparator) {
  // Default comparator: sorts numbers in ascending order
  const defaultComparator = (a, b) => a - b;

  // Use provided comparator or fall back to default
  const compare = typeof comparator === 'function' ? comparator : defaultComparator;

  let n = arr.length;
  let swapped;

  // Bubble sort logic
  for (let i = 0; i < n; i++) {
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        // Swap if in wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    // Optimization: if no swaps were made, array is sorted
    if (!swapped) break;
  }

  return arr;
}
```