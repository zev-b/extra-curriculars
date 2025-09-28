# Tuples

### Tuples are a special type exclusive to TypeScript (they don't exist in JS)


## Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

```ts 
// creating a tuple with its type definition
let myTuple: [number, string];

// can assign it values per its specs
myTuple = [10, 'Typescript is'];

// CANNOT assign it values of a diff structure
    myTuple = ['Typescript is', 10];
            // ^^^^^^^^^^^^^^^^^^^ WILL ERROR!

// This will require 3 number values in the array, no more, no less
const color: [number, number, number] = [3, 4, 5];

// mixed types with order sensitivity
// [200, "OK"]
type HTTPResponse = [number, string];

let goodResponse: HTTPResponse = [200, "OK"];

// if you use the push method after the tuple is created, it WILL work!
// This is a limitation of tuples
goodResponse.push(123) // -> no error!

// typing as an array of tuples using above tuple
const payload: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];
```

