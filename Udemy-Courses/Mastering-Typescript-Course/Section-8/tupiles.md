# Tuples

### Tuples are a special type exclusive to TypeScript (they don't exist in JS)


## Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

```ts 
// creating a tuple with its type definition
let myTuple: [number, string];

// can assign it values per its specs
myTuple = [10, 'Typescript is'];

// cannot assign it values of a diff structure
    myTuple = ['Typescript is', 10];
            // ^^^^^^^^^^^^^^^^^^^ WILL ERROR!


```