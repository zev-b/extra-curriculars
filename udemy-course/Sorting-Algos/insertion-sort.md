Builds up the sort by gradually creating a larger left half which is always sorted.
Taking 1 ele at a time and check to insert it at the correct idx in the sorted half of the array.

O(n^2) Quadratic Time.

__Online Algorithm__ is an algo that can work even with part of the data, and receiving live data. Insertion Sort works well with this, since it keeps a half of the data already sorted and can handle new data on the spot.
```js
function insertionSort(arr) {
    // start from 2nd ele of arr 
    for (let i = 1; i <arr.length; i++) {
        let currentVal = arr[i];
        //  retrace backwards to determine placement until beg or we found place to insert
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            // Move up greater vals
            arr[j+1] = arr[j]
        }
        // Insert
        arr[j+1] = currentVal;
    }
    
    return arr;
}
```


```js
/**
                            Insertion Sort
Given an array, both algorithms will sort the values in the array. The functions take 2 parameters: an array and an optional comparator function. The comparator function is a callback that will take two values from the array to be compared. The function returns a negative value if the first value is less than the second, a positive value if the first value is greater than the second, and 0 if both values are equal. The default comparator you provide should assume that the two parameters are numbers and that we are sorting the values from smallest to largest.

*/
// * Here's some guidance for how insertion sort should work:
`
1. Start by picking the second element in the array (we will assume the first element is the start of the "sorted" portion)

2. Now compare the second element with the one before it and swap if necessary.

3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place.

4. Repeat until the array is sorted.Implement insertion sort. Your function should accept an array and return an array of sorted values.
`
function insertionSort(arr, comparator){
  if (typeof comparator !== 'function') {
      comparator = function(a, b) {
          return a - b;
      }
  }
  for (let i = 1; i < arr.length; i++) {
      let currentVal = arr[i];
      for (var j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
          arr[j+1] = arr[j];
      }
      arr[j+1] = currentVal;
  }
  return arr;
}