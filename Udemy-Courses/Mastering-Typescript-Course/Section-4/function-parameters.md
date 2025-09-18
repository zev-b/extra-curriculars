# Function Parameters
- In TS, we can specify the type of function parameters in a function definition.
- This allows TS to enforce the types for the values being passed into the function.
- Typeing parameters is just like typing variables!

```ts
const encourageStudent = (name: string) => {
    return `Hey, ${name}, you're doing great!`;
}
// can call the func with a string
encourageStudent('Jamal');

// cannot call func with other type args
encourageStudent(72);
    // --> Typescript error!
```

## Multiple Function Parameters, with different Types respectively
```ts
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// will notify errors based on positional args
// will notify if passing in too many, or too few args
doSomething(true, "45", "Winchester"); // incorrect positions and types errors

doSomething("Gary", 1, 4, true); // too many args!
```

# Default Parameters Typed
- Done right **after** the Type Annotation
```ts                            
function greet(person: string = "stranger") { // done right after type declaration
    return `Hi ${person}!`;
}
```

# Function Return Types
- We can specify the type returned by a function. Even though TS can often infer this, I prefer the explicit annotations.
- Add the type annotation after the function parameter list `(params): returnType => {}`

```ts
const addNums = (x: number, y: number): number => {
    return x + y;
}
```
- When multiple types can be the return value, it is called a Union Type, we will see this soon. TS will infer that as well too.

# Anonymous Functions
- When TS can infer how an unnamed function is going to be called, it can autoatically infer its params' types.

```ts
const numbers = [1, 2, 3];
numbers.forEach(num => {
    return num.toUpperCase(); // Error, .toUpperCase() doesnt work for nums
});

// bec of the context, TS knows that colors are string, and therefore it does not infer the any type. So if we called colors.toFixed() in the block, IT WILL ERROR!
const colors = ["red", "green", "blue"];
colors.map(color => {
    return color.toUpperCase(); // .toFixed() will Error even without annotation of color type
});
```

# The Void Type: `void`
- Void is a return type for functions that don't return anything. It means just that - this function is void of any data.
- TS can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explicitly.

```ts
const annoyUser = (num: number): void => {
    for (let i = 0; i < num; i++) {
        alert('HEY!')
    }
}
```

# The Never Type:
- The never type represents values that NEVER occur. We might use it to annotate a function that always throws an exception, or a function that never finishes executing.
- Don't confuse with the `void` type. 
- `Void` - returns `undefined` or `null`. Which is technically still a type of value.
- With `never`, a function doesn't even finish executing.

```ts
// doesnt finish running
const neverStop = (): never => {
    while (true) {
        console.log("I'm still going!");
    }
};

// throws an exception
cons giveError = (msg: string) => {
    throw new Error(msg);
}