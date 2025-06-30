All previous algos for sorting boli down to comparison sorts.
- Bubble: O(n^2)
- Insertion: O(n^2)
- Selection: O(n^2)

- Quick: O(n log(n))
- Merge: O(n log(n))

The way we can do better is to have the sorting algo work differently than comparisons.

## Radix Sort
- Works on Integers/numbers only.
- Never makes comparisons.
- Exploits the fact that the number of digits determines its position versus other #s of digits, lesser and greater.
- Assume base 10 numbers compatability.

### Helper Methods for Radix: 
1. - `getDigit(num, place)` - returns the digit in *num* at the given *place* value.
```js
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
```
2. - `digitCount(num)` - returns the number of digits in *num*.
```js
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```
3. - `mostDigits(nums)` - Given an array of nums, returns the number of digits in the largest numbers in the list.
```js
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i])); // uses prev helper
    }
    return maxDigits;
}
```
## Pseudocode:
1. Define a function that accepts a list of nums.
2. Figure out how many digits the largest number has. (`mostDigits`)
3. Loop from *k = 0* up to the largest number of digits
4. For each iteration of the loop:
    - Create buckets for each digit (0-9)
    - Place each number in the corresponding bucket based on its *k*th digit (`getDigit`).
5. Relpace our existing array with values in our backets, starting with 0 and going up to 9.
6. Return list

```js
function radixSort(nums) {
    // How many digits in largest num?
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // Create buckets array
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            // What val at k position?
            let digit = getDigit(nums[i], k);
            // Place nums[i] at position in bucket
            digitBuckets[digit].push(nums[i]);
        }
        // Recollect and sort as we go
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
```

## Big O:
- `O(nk)` Time
- `O(n + k)` Space

( n - length of array )

( k - number of digits(average) )

- So depending on how we understand how numbers are stored by a computer, Radix is either better or just as good (tied) as the previous comparison sorts. See the world wide web.

## All Together: 
```js
// Helper 1
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// Helper 2
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// Helper 3
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
     maxDigits = Math.max(maxDigits, digitCount(nums[i])); // uses Helper 2
  }
  return maxDigits;
}

function radixSort(nums) {
   // How many digits in largest num?
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        // Create buckets array
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let i = 0; i < nums.length; i++) {
            // What val at k position?
            let digit = getDigit(nums[i], k);
            // Place nums[i] at position in bucket
            digitBuckets[digit].push(nums[i]);
        }
        // Recollect and sort as we go
        nums = [].concat(...digitBuckets);
    }
    return nums;
}
```