- Its a combo of splitting, merging, and sorting.
- exploits the fact that arrays of 0 or 1 ele are always sorted.
- works by decomposing an array into smaller arrays, then merge

### How it works: 
```
                    [ 8, 3, 5, 4, 7, 6, 1, 2 ]
                         <------- ------>
             [ 8, 3, 5, 4 ]             [ 7, 6, 1, 2 ]
                <--- --->                   <--- --->
         [ 8, 3 ]  [ 5, 4 ]             [ 7, 6 ]  [ 1, 2 ]
             <--- --->                        <--- --->
    [ 8 ]  [ 3 ]  [ 5 ]  [ 4 ]        [ 7 ]  [ 6 ]  [ 1 ]  [ 2 ]
        --> <--        --> <--           --> <--       --> <--
        [ 3, 8 ]  [ 4, 5 ]                [ 6, 7 ]  [ 1, 2 ]
              --> <--                           --> <--
          [ 3, 4, 5, 8 ]                     [ 1, 2, 6, 7 ]
                       ---------> <----------
                    [ 1, 2, 3, 4, 5, 6, 7, 8 ]
```

### How to Merge?
### We will explore the mechanics of breaking down the part of the algo that will handle merging the SORTED vals back into ea other. This would be a helper function used in the Merge-Sort algo. 
### Note: This func does not do any sorting and will only work on sorted arrays as inputs... 
```
/**
 * The function should run in O(n+m) time and space 
 * Should not modify the parameters passed in
 * 
                            Pseudocode: 
 * Create an empty array, take a look at the smallest vaks in ea arr
 * While there are still vals not seen:
 *      If the val in arr1 is smaller than val in arr2, push the val in arr1 into result arr and move onto next val in arr1
 *      If the val in arr1 as larger, than arr2 val, push arr2 val into results arr and move to next val in arr2
 * Once we exhaust one arr, push in all remaining vals from the remaining arr.
 * /
```

```js
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            result.push(arr1[i]);
            i++;
        } else {
            // either equal or other is greater
            result.push(arr2[j]);
            j++;
        }
    }
    // To take care of remaining leftover vals after full pass on 1 and not the other arr. Note, if both had a full pass, the condition for while loop id not true, so code wont be executed.
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}
```

###  MergeSort Pseudocode:
- Mostly uses recursion

- Recursively break up the array into halves until length is 1 or 0
- Once its all broken down, recursively call the merge helper func

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}
```

### Big O of Merge Sort

- O(n log n) in best, average and worst case!
- Why?
- Bec we continue to decompose the array until single element arrays.
- O(log n) Decompositions
- And the *n* log n comes from merging, there's *n* comparisons per decomposition

So it totals to *O(n log n)*

The space Complexity is O(n), takes up more space than bubble or others mentioned before, but has a  ajor improvement on Time complexity.