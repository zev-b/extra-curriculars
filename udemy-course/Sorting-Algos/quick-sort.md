- Like merge sort, it exploits the fact that arrays of 0 or 1 els are always sorted.
- Works by selecting one el (called a pivot) and finding the index where the pivot should end up in the sorted array.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

```
                [ 5, 2, 1, 8, 4, 7, 6, 3 ]
                   Pivot -->  5
            [ 3, 2, 1, 4,        5*, 7, 6, 8 ]

          Pivot -->  3
                [ 1, 2, 3*, 4,       5, 7, 6, 8 ]

           Pivot -->  1
                (left side sorted)
                                        7 <-- Pivot
                                    [ 5, 6, 7*, 8 ]
                                    (right side sorted)
```

- Count the amount of els less than val to determine what idx position the el will be in the sorted arr.
- Swap the lesser vals with to be left of pivot, the move pivot after those lesser vals. 

## Psuedocode:

### (Pivot/Partition Helper Func:
- In order to implement quick sort, it's useful to implement a function responsible for arranging elements in an array on either side of a pivot.
- Given an array, this func should designate an element as the pivot.
- It should then rearrange elements in the array so that all the values less than the pivot are moved to the left of the pivot and all vals greater than the pivot to the right of the pivot.
- The order of the elements on either side of the pivot doesnt matter
-  The helper should do this **in place**, meaning it should not create a new array.
- When complete, the helper should return the index of the pivot.
)
> Choosing a pivot:
>> Should be a median val, but we will work with the first element being the pivot, but there is a cost to this.

1. Accepts 3 args, an array, start index, end index.
2. Grab the pivot from the start of the array.
3. Store the pivot's index in a variable, to track where the pivot should end up.
4. Loop through th array from the start until the end.
    - If the pivot is greater than the current element, increment the pivot index variable, and then swap the current index with the element at the pivot index.
5. Swap the starting elemet (the pivot) with the pivot index.
6. Return the pivot index.

### Sorting
1. Call pivot helper func on the array. 
2. When the helper returns the updated pivot index, recursively call on the subarray to the left of that index, and the subarray to the right of that index.
3. Your base case occurs when you consider a subarray with less than 2 elements.


```js
function pivot(arr, start = 0, end = arr.length -1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    // Swap the pivot from the start to the swap point
    swap(arr, start, swpaIdx);

    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIdx = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIdx - 1);
        // right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}
```