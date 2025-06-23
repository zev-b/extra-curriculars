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