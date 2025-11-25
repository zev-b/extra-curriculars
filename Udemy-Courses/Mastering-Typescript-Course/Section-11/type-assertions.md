# Type Assertions

- Sometimes you might have more specific information about a value's type, and you want to make sure TS knows it too
- You can assert a value's type by using the `as` keyword, followed by the specific type you want to assert.

```ts
const myPic = document.querySelector("profile-image") as HTMLImageElement;
```

Or in this wierd illustration of the concept; to apply a type for a variable only in a specific context...
```ts
let mystery: unknown = "Hello";

const numChars = (mystery as string).length;
```
- This will declare it as a string in that single context, but globally `mystery` is still of type: `unknown`.


## Type Asertions with the DOM:
- First we seect the element.
```ts
const input = document.getElementById("input-field") as HTMLElement;
// but if we wnat to write to input.value
input.value // will error!
```
So we need to tell TS that the value/variable 'input' is a variable with the property `.value`
```ts
const input = document.getElementById("input-field") as HTMLInputElement;
```
Now TS is aware of the .value property that belongs to this variable so it wont error when trying to access/write o the kvalue that we want to change.

### An Alternative Type Assertion Syntax:
- **Cons:**
  - Doesn't work with JSX/React
  - Less common
```ts
(<HTMLInputElement>input).value = "";
(<TyperAssertion>var_asserted).property_needed;
```