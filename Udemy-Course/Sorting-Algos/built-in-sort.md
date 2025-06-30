#### With just `.sort()`, it is unpredictable and most of the time not the way we want the data sorted.
### But it accepts an optional *comparator* cb function...
### The Comparator looks at pairs of elements (*a* and *b*), determines their sort order based on the return value: 
- If it returns a negative number, *a* should come before *b*
- If it returns a positive number, *a* should come after *b*
- If it returns 0, *a* and *b* are the same as far as the sort is concerned and JS returns them together.

```js
arr.sort((a, b) => a - b); // sort ASC?

arr.sort((a, b) => b - a); // sort DESC?

function sortByLen(a, b) {
    return a.length - b.length;
}

["asdf", "ghj", "klmno", "qw", "e", "tyuiop"].sort(sortByLen);
```