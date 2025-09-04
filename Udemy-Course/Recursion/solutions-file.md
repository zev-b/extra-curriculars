# SOLUTIONS PART 1
## RECURSION CHALLENGE SECTION SOLUTIONS
### Reverse Solution
```js
function reverse(str) {
	if (str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
```
### isPalindrome Solution
```js
function isPalindrome(str) {
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[1];
    if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}
```
### someRecursive Solution
```js
function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1), callback);
}
```
### flatten Solution
```js
function flatten(oldArr) {
    var newArr = []
    for (var i = 0; i < oldArr.length; i++) {
    	if (Array.isArray(oldArr[i])) {
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
    } 
    return newArr;
}