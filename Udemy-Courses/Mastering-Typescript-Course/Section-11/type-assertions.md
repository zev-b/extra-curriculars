# Type Assertions

- Sometimes you might have more specific information about a value's type, and you want to make sure TS knows it too
- You can assert a value's type by using the `as` keyword, followed by the specific type you want to assert.

```ts
const myPic = document.querySelector("profile-image") as HTMLImageElement;
```

Or in this wierd illustration of the concept...
```ts
let mystery: unknown = "Hello";

const numChars = (mystery as string).length;
```
- This will declare it as a string in that single context, but globally `mystery` is still `unknown`.