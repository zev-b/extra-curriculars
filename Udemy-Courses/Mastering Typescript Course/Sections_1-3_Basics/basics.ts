// .ts
// .tsx // Typescript React/JSX file extension

// These are the Typescript file extensions for the code files we will be working with.

// Typescript is a superset of JavaScript that adds static typing to the language. It allows developers to catch errors at compile time rather than runtime, making it easier to write and maintain large codebases.

// Math.round(); // This Typescript error is letting me now that the round method requires a number argument.

// Math.round(4.5); // This is correct usage of the round method.

// Math.round("Hello"); // This will throw an error because "Hello" is not a number.

// I can run this code using the command: tsc basics.ts
// This will compile the Typescript code into JavaScript code, creating a new file called basics.js in the same directory.

// I can then run the compiled JavaScript code using the command: node basics.js

// To watch for changes and automatically recompile the code, I can use the command: tsc basics.ts --watch
// This will keep the TypeScript compiler running and will recompile the code whenever I make changes to the basics.ts file.

// To initialize a new TypeScript project with default settings, I can use the command: tsc --init
// This will create a tsconfig.json file in the current directory, which contains various configuration options for the TypeScript compiler.

// I can then modify the tsconfig.json file to customize the compiler options according to my project's needs.  

let pi: number = 3.14; // Here, I am explicitly declaring the type of the variable 'pi' as a number. 