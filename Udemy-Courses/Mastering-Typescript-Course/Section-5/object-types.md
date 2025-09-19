# Objects


```ts
// standard object literal
const dog = {
    name: "Elton",
    breed: "Dragon",
    age: 200
}

function printName(person: { first: string, last: string }): string {
    // a function that takes in a param that is an object, we can then annotate its key value pairs
    return `Hello ${person.first} ${person.last}`;
}

// declaring an obj variable's k/v type
let coordinate: { x: number, y: number } = { x: 3, y: 4 };

// annotating the function return value as an object
function randomCoordination(): { x: number, y: number } {
    return { x: Math.random(), y: Math.random() };
}



```

- If we have a variable object declared 'globally', we can pass it through to a function that is only concerned with the function's acceptable args/properties, **others will be ignored**. 
- But if we pass into the function, an inline object being declared with more properties than acceptable into the function that we annotated its object params, it **WILL ERROR**! 
  
  - So `printName({first: "Gary", last: "Lo", age: 27})`
    - This will error. The function is annotated to have first & last properties, **no extra properties are allowed**.
  - But: 
  ```ts
  const dude = {first: "Arny", last: "Gawk", isAlive: true};
  // then pass this into same func
  printName(dude); 
      // This will NOT error/complain, and the function will only regard the relevant parameters based on function params annotation
  ```

