# Union Types
### Telling TS that a variable/property value can be more than 1 type, and should only error if the value is ***not*** one of the specified types.

```ts
let age: number | string = 21;

age = "24";

let age2: number | string | boolean = true;


type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
}

let coordinates: Point | Loc = {x: 1, y: 24};
coordinates = {lat: 451.125, long: 746.12};
```


# Union Types with Functions

```ts
function printAge(age: number | string): void {
    console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number): number {
    // TS will notify that since price can be a string, this arithmetic will error
    return price * tax;
}
// so we can add a type narrowing check
function calculateTax(price: number | string, tax: number): number {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
```
### This is called Type Narrowing
- Narrowing the Type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number.


# Unions with Arrays
### 1. An array of both numbers and strings = `(type1 | type2)[]`

### 2. NOT `type1[] | type2[]` THIS IS DIFFERENT!
```ts
const stuff: (number | string)[] = [1, 2, "hi"];
```