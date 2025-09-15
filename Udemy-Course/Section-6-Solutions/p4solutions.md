# SOLUTIONS PART 4

## countZeroes Solution
### Solution 1:
```js
function countZeroes(arr) {
  let firstZero = findFirst(arr)
  if (firstZero === -1) return 0;
 
  return arr.length - firstZero
}
 
function findFirst(arr, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2)
    if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
      return mid;
    } else if (arr[mid] === 1) {
      return findFirst(arr, mid + 1, high)
    }
    return findFirst(arr, low, mid - 1)
  }
  return -1;
}
```
### Solution 2:
```js
function countZeroes(arr) {
    let left = 0;
    let right = arr.length - 1;
    // Binary search to find first occurrence of 0
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === 1) {
            // First zero must be to the right
            left = mid + 1;
        } else {
            // arr[mid] === 0, first zero could be here or to the left
            right = mid - 1;
        }
    }
    // left now points to first zero (or arr.length if no zeros)
    return arr.length - left;
}
```


## sortedFrequency Solution
```js
function sortedFrequency(arr, num) {
  let firstIdx = findFirst(arr, num);
  if (firstIdx === -1) return firstIdx;
  let lastIdx = findLast(arr, num);
  return lastIdx - firstIdx + 1;
}
function findFirst(arr, num, low = 0, high = arr.length - 1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
      return mid;
    } else if (num > arr[mid]) {
      return findFirst(arr, num, mid + 1, high)
    } else {
      return findFirst(arr, num, low, mid - 1)
    }
  }
  return -1
}
 
function findLast(arr, num, low = 0, high = arr.length -1) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
      return mid;
    } else if (num < arr[mid]) {
      return findLast(arr, num, low, mid - 1)
    } else {
      return findLast(arr, num, mid + 1, high)
    }
  }
  return -1
}
```

## findRotatedIndex Solution:
```js
function findRotatedIndex(array, num) {
  var pivot = findPivot(array)
  if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
    return binarySearch(array, num, 0, pivot - 1);
  } else {
    return binarySearch(array, num, pivot, array.length - 1);
  }
}
 
function binarySearch(array, num, start = 0, end = array.length - 1) {
  if (array.length === 0) return -1;
  if (num < array[start] || num > array[end]) return -1;
 
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (array[mid] === num) {
      return mid;
    } else if (num < array[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
 
function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  var start = 0
  var end = arr.length - 1;
  while (start <= end) {
    var mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return mid + 1
    else if (arr[start] <= arr[mid]) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
}
```