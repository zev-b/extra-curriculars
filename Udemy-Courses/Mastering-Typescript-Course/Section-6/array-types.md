# Array Types

## Annotating for Uniformed Typed Array Values
```ts
// const activeUsers: [] = []; // this is telling TS that it should be an EMPTY array!, this is not what we want, we need to be able to add values.

const activeUsers: string[] = ["Bob", "Mike", "Steven"];
// will error for non-string values

const ages: number[] = [21, 32, 43, 23];
// will error for non-number values

const truths: boolean[] = [true, false, false, true, true];
// will error for non-boolean types
```

### Equal Alt Syntax:
```ts
const activeUsers: Array<string> = ["Bob", "Mike", "Steven"];

const ages: Array<number> = [21, 32, 43, 23];

const truths: Array<boolean> = [true, false, false, true, true];
```

<!-- ## Annotating for multiple typed array values -->
### We are not limited to Primitive Types in annotating Arrays. We can use a custom type for an object we declared already as well and just change to expect an Array. An array of the custom type we created!
```ts
type Point = {
    x: number;
    y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 3 }); // valid; [{x:23, y:3}]

coords.push({ x: 23 }); // will error, missing 'y' property
coords.push({ x: "23", y: 3 }); // error, expected 'x' to be a number

```