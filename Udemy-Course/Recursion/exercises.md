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
