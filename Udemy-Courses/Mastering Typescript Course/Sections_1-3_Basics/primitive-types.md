# Primitive Types:
#### Telling JS the type of a variable
- Numbers: `number`
- Booleans: `boolean`
- Strings: `string`

```ts
const myTypeVariable: string = "Hello Typescript World!";

// I can then change the value of this variable to a different string as usual
myTypeVariable = "Changes";

// But if I attempt to reassign the variaable to a value that is not a string... typescript will complain and notify me that I have breached the type declared for this variable.
myTypeVariable = 42;
                ^^^^ // type number is not assignable to type string

myTypeVariable.toupper(); // in a js file this will error and suggest to use toUpperCase() instead!
```