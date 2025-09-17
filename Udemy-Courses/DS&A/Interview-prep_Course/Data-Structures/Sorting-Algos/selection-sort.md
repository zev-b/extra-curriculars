Buiding the sorted array, by selectiong the small values first, so it accumulating at the beginning of the array.

O(n^2) time complexity, and 1 scenario where better than bubble-sort. Bubble swaps at ea iteration, Selection doesnt until the end of a full pass.
```
Pseudocode:
1. Store the first ele's index as the smallest value seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. if a smaller num is found, designate that smaller num to be new "minimum" and continue until end of array.
4. If the "minimum is not the value (index) you initially began with, swap the 2 values.
5. Repeat this with the next element until array is sorted.
```

# Selection Sort

Here's some guidance for how selection sort should work:
```
(Better Pseudocode:)
1. Assign the first element to be the smallest value (this is called the minimum). It does not matter right now if this actually the smallest value in the array.

2. Compare this item to the next item in the array until you find a smaller number.

3. If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.

4. If the "minimum" is not the value (index) you initially began with, swap the two values. You will now see that the beginning of the array is in the correct order (similar to how after the first iteration of bubble sort, we know the rightmost element is in its correct place).

5. Repeat this with the next element until the array is sorted.
```
This algorithm has a O(n^2) time complexity. You can read more about them here: https://www.rithmschool.com/courses/javascript-computer-science-fundamentals/basic-sorting-algorithms
```
Examples

selectionSort([4, 20, 12, 10, 7, 9]); // [4, 7, 9, 10, 12, 20]
selectionSort([0, -10, 7, 4]); // [-10, 0, 4, 7]
selectionSort([1, 2, 3]); // [1, 2, 3]
selectionSort([]);
 
var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
selectionSort(nums); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
 
var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
 
function strComp(a, b) {
  if (a < b) { return -1;}
  else if (a > b) { return 1;}
  return 0;
}
 
selectionSort(kitties, strComp); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
 
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
 
selectionSort(moarKittyData, oldestToYoungest); // sorted by age in descending order
```

```js 
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Conditional to update lowest
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) {
            // Swap
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
```

```js
// ES2015 Syntax and helper
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {
        ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
    }

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Conditional to update lowest
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest) swap(arr, i, lowest);
    }
    return arr;
}
```