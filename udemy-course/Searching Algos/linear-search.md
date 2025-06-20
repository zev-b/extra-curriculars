### These are searching algos in their source code for arrays in JS.
- `indexOf()`
- `find()`
- `findIndex()`
- `includes()`

## Basic Linear Search: O(n) Time
```js
function linearSearch(arr, target){
  if (!arr.length) return -1;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

