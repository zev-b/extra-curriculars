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

The space Complexity is O(n), so it takes up more space than bubble or others mentioned before, but has a major improvement in Time complexity.


#
# Now all together with a comparator argument: 
Implement the merge sort algorithm. Given an array, this algorithm will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function.

The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal.

The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

Here's some guidance for how merge sort should work:
```
1. Break up the array into halves until you can compare one value with another
2. Once you have smaller sorted arrays, merge those arrays with other sorted pairs until you are back at the full length of the array
3. Once the array has been merged back together, return the merged (and sorted!) array
4. In order to implement this function, you'll also need to implement a merge function that takes in two sorted arrays and a comparator and returns a new sorted array. 
```
You implemented this function in the previous exercise, so copy and paste that code here.

```js
function merge(arr1, arr2, comparator){
    // Taken care of at entry point func, see mergeSort below
//   if (typeof comparator !== 'function') {
//     comparator = function(a, b) {
//       return a - b;
//     };
//   }
  let result = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (comparator(arr1[i], arr2[j]) <= 0) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

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

function mergeSort(arr, comparator){
  if (arr.length <= 1) return arr;

  if (typeof comparator !== 'function') {
    comparator = function(a, b) {
      return a - b;
    };
  }
  
  let mid = Math.floor(arr.length / 2);
    
  let left = mergeSort(arr.slice(0, mid), comparator);
  let right = mergeSort(arr.slice(mid), comparator);

  return merge(left, right, comparator);
}
```
