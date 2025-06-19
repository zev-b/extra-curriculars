# SOLUTIONS PART 1
## sameFrequency Solution
```js
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;
 
  let countNum1 = {};
  let countNum2 = {};
 
  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }
 
  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }
 
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }
 
  return true;
}
```

## areThereDuplicates Solution (Frequency Counter)
```js
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}
```
## areThereDuplicates Solution (Multiple Pointers)
```js
function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
 
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
```
## areThereDuplicates One Liner Solution
```js
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
```

## constructNote Solution
```js
function constructNote(message, letters) {
  var frequency = {};
  var frequencyM = {};
 
  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[i]] || 1;
  }
 
  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }
 
  for (let k in frequencyM) {
    if (!frequency[k]) return false;
    if (frequencyM[k] > frequency[k]) return false;
  }
 
  return true;
}
```
## findAllDuplicates Solution
```js
function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i])
  }
  return ans;
}
```