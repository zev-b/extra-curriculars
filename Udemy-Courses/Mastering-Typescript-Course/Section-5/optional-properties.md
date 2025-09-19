## Previously we type annotated object properties...
# What if we want to tell TS not to throw an error for an optional property, one that you consider optional.

### The property is followed by a `?` mark to indicate as optional
```ts
type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = { x: 3, y: 2 };
```