# Part 1

## Reverse
Write a recursive function called reverse which accepts a string and returns a new string in reverse.

```js
function reverse(str){
  if (!str.length) return '';
  
  return reverse(str.slice(1)) + str[0];
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
```

## isPalindrome
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

```js
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
 
  if (str.length === 0 || str.length === 1) return true;
  console.log(`Start: ${str[0]}, \nEnd: ${str[str.length-1]}`) 
  if (str[0] === str[str.length - 1]) {
 
    //   str.slice(1, -1);
    console.log(`Trimmed: ${str.slice(1, -1)}`)
      return isPalindrome(str.slice(1, -1));
  } 
  return false;
}
```

## someRecursive
Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

```js
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(arr, cb){
    if (!arr.length) return false;
    
    if (cb(arr[0])) return true;
    
    return someRecursive(arr.slice(1), cb);
}
```

## flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
```js
function flatten(arr){
   let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        // If the current element is an array, recursively flatten it
        if (Array.isArray(arr[i])) {
            // Spread the flattened array into our result
            result.push(...flatten(arr[i]));
        } else {
            // If it's not an array, just add it to the result
            result.push(arr[i]);
        }
    }
    
    return result;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
```



# Part 2:

## capitalizeFirst Solution
```js
function capitalizeFirst (array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  res.push(string);
  return res;
}
```

## nestedEvenSum Solution
```js
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}
```

## capitalizeWords Solution
```js
function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}
```

## stringifyNumbers Solution
```js
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}
```

## collectStrings Solution: Helper Method Recursion Version
```js
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for (var key in o) {
            if (typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if (typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
```

## collectStrings Solution: Pure Recursion Version
```js
function collectStrings(obj) {
    var stringsArr = [];
    for (var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if (typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}
```

