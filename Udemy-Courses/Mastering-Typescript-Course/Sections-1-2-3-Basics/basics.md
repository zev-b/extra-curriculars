# Basics
### 1. I can run this code using the command: `tsc basics.ts`.

### 2. This will compile the Typescript code into JavaScript code, creating a new file called `basics.js` in the same directory.

### 3. I can then run the compiled JavaScript code using the command: `node basics.js`.

### 4. To watch for changes and automatically recompile the code, I can use the command: `tsc basics.ts --watch`
    - This will keep the TypeScript compiler running and will recompile the code whenever I make changes to the basics.ts file.

### 5. To initialize a new TypeScript project with default settings, I can use the command: `tsc --init`.
    - This will create a `tsconfig.json` file in the current directory, which contains various configuration options for the TypeScript compiler.
    - I can then modify the tsconfig.json file to customize the compiler options according to my project's needs.  
    - Such as the syntax used for the js conversion through the compiler. By default, the compiler may use `var` for variable declaration, but I an use ES2015 syntax with `const` & `let` when I change the `config` file accordingly.

# Type Inference

### 1. Most of the time, we won't have to annotate variables, we can allow TS to infer it.
### 2. Based on its value assigned to the variable, TS will automatically track and notify you if any 'errors' are taking place.


# Primitive Types:
#### Telling JS the type of a variable
- Numbers: `number`
- Booleans: `boolean`
- Strings: `string`

#### Example:
```ts
const myTypeVariable: string = "Hello Typescript World!";

// I can then change the value of this variable to a different string as usual
myTypeVariable = "Changes";

// But if I attempt to reassign the variaable to a value that is not a string... typescript will complain and notify me that I have breached the type declared for this variable.
myTypeVariable = 42;
                ^^^^ // type number is not assignable to type string

myTypeVariable.toupper(); // in a js file this will error and suggest to use toUpperCase() instead!
```

# The Any type: `any`
### 1. The `any` type is an escaspe hatch. It turns off type checking for this variable so you can do your thing.
### 2. **NOTE:** It sort of defeats the purpose of TS and types, so use it sparingly! 

```ts
let thing: any = "string";

thing = 1; // no complaints
thing = false; // no complaints

thing(); // even can call as a function without complaint (won't work though)
thing.toUppercase(); // even call a method that doesnt exist on the variable (Since it has been assigned to false in the interim)
```


```
