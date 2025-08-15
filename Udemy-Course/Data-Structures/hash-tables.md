# Hash Tables / Hash Maps
- Built into many programming languages as a default DS.
  - *Python*: `Dict`/Dictionaries
  - *Js*: `Object` (but has some restrictions)
  - *Java, Go, Scala*: `Maps`
  - *Ruby*: `Hashes`
  
- What is it?
  - Stores key-value pairs.
  - Unordered Keys
  - HTs are fast

- We'll be using an array to implement a Hash Table.

- In order to look up values by a key, we need a way to convert keys into valid array indices.
  - A function that performs this task is called a hash function.
    - Every time you pass in the key, it returns the **same** number for its designated index.

- Hash Functions are used in many ways, data, authentication, cryptography, etc... 
- Usually a one-way function, and the output is meaningless and cannot be reverse-engineered.
- A Good Hash:
  - **Fast** (Constant Time)
  - Doesn't cluster oututs at specific indices, rather **distributes uniformly**.
  - **Deterministic** (Same input, always same output).

### Not a Good Hash
- UTF value
- `"a".charCodeAt(0) // 0 is index`
- If subtract the number `96` from charcodeAt return value, you get its alphabetic position.
- `%`
- arrayLen, total charCodeAt val of string, % arrayLen .
- ```js
    function hash(key, arrayLen) {
        let total = 0;
        for (let char of key) {
            let value = char.charCodeAt(0) - 96;
            total = (total + value) % arrayLen;
        }
        return total;
    }
- Only Hashes Strings (beyond Scope)
- Not constant time its O(n) instead.
- Can be clustered relatively easy.

### Refining 
- Only look at the first 100 chars of the string by Adding a max for loop, so not O(n) on string.
- Add Prime Numbers for better distribution.
```js
    function hash(key, arrayLen) {
        let total = 0;
        let WEIRD_PRIME = 31;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % arrayLen;
        }
        return total;
    }
```
### Handling Colisions: 
- Colisions are inevitable
- Solutions:
  - **Separate Chaining:**
    - Store multiple values at same key in DS, as 1st and 2nd vals for the key.
  - **Linear Probing:**
    - Only 1 val at ea key
    - We look forward for the next empty slot.

## Set Method
1. Accepts a key and a value.
2. Hashes the key
3. Stores the key-value pair in the hash table array via **separate chaining** nesting in an array.

## Get Method
1. Accepts a key and a value.
2. Hashes the key.
3. Retrieve the key-value pair in the hash.
4. If the key isnt found, return undefined.

## Keys & Values Methods:
#### Keys
1. Loop thru the hash table array and returns an array of **keys** in the table. 
2. Handle Duplicates

#### Values
1. Loop thru the hash table array and returns an array of **values** in the table.
2. Handle Duplicates
   
```js
    class HashTable {
        constructor(size=53) {
            this.keyMap = new Array(size);
        }
        _hash(key) {
            let total = 0;
            let WEIRD_PRIME = 31;

            for (let i = 0; i < Math.min(key.length, 100); i++) {
                let char = key[i];
                let value = char.charCodeAt(0) - 96;
                total = (total * WEIRD_PRIME + value) % this.keyMap.length;
            }
            return total;
        }
        set(key, value) {
            let index = this._hash(key);
            if (!this.keyMap[index]) {
                this.keyMap[index] = [];
            }
            this.keyMap[index].push([key, value]);
            return index;
        }
        get(key) {
            let index = this._hash(key);
            if (this.keyMap[index]) {
                for (let i = 0; i < this.keyMap[index].length; i++) {
                    if (this.keyMap[index][i][0] === key) {
                        return this.keyMap[index][i][1]; // ... ,['cyan', #000fff], ...
                    }
                }
            }
            return undefined;
        }
        values() {
            let valuesArr = [];
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i]; j++) {
                        // Handling Duplicates
                        if (!valuesArr.includes(this.keyMap[i][j][1])) {
                            valuesArr.push(this.keyMap[i][j][1]); // values only
                        }
                    }
                }
            }
            return valuesArr;
        }
        keys() {
            let keysArr = [];
            for (let i = 0; i < this.keyMap.length; i++) {
                if (this.keyMap[i]) {
                    for (let j = 0; j < this.keyMap[i]; j++) {
                        // Handling Duplicates
                        if (!keysArr.includes(this.keyMap[i][j][0])) {
                            keysArr.push(this.keyMap[i][j][0]); // keys only
                        }
                    }
                }
            }
            return keysArr;
        }
    }
```



## Big O:
|  Big O   |      |
|----------|------|
| Insert   | O(1) |
| Deletion | O(1) |
| Access   | O(1) |
