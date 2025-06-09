- Use 2 pointers to observe 2 indices in an array or string
- Helps when sorted for this pattern to be efficient

Naive Approach is to have first pointer at indx 1, and compare this indx to every other indx in the array/str
- but the nested loop and sub-optimal check-logic uses too many attempts to conclude the check o the whole array.

```js
function sumZero(arr) {
    let left = 0;
    let right = arr.length -1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
```

# A different implemenation of of previous logic, for a diff problem

set 2 pointers, 1 at idx 0 and second at idx 1 (right in front of other)
check if unique,
if yes, increment both pointers

if no (both same value),
increment second pointer

```js
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
```


