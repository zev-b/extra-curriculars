Loop over longer string
    Nested loop over shorter string
    If the chars dont match, break out of inner loop
    If they match, keep going
    If inner loop is completed, update number of matches
Return Count

```js
function naiveSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            // break out of inner comparison when next letter (since j will still incrememt) is not a match
            if (short[j] !== long[i+j]) break; 
            // We have found a match when the inner loop index has reached the same length of the short string.
            if (j === short.length -1) count++;
        }
    }
    return count;
}