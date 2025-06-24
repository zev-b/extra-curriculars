Buiding the sorted array, by selectiong the small values first, so it accumulating at the beginning of the array.
```
Pseudocode:
1. Store the first ele's index as the smallest value seen so far.
2. Compare this item to the next item in the array until you find a smaller number.
3. if a smaller num is found, designate that smaller num to be new "minimum" and continue until end of array.
4. If the "minimum is not the value (index) you initially began with, swap the 2 values.
5. Repeat this with the next element until array is sorted.
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
        // Swap
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
    }
    return arr;
}
```