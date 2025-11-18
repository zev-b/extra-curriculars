# Non-Null Assertion Operartor:

### With:
```html
<button id="btn">Click Me!</button>
```
### And The Following TS:
```ts
const btn = document.getElementById("btn");
```
### What is the Type of this variable (`console.dir()`)
```js
console.dir(btn);
// scroll all the way down to find the javascript type definition that gets printed to the console with this command. Its the blueprint of the variable object.
```
### It knows that it returns a *generic* "`HTMLElement`"...

### But how do we tell js more info, or allow us to use methods that are associated with the element?

#### For example `btn.addEventListener()`, ts may complain var could be null since its not a method for the variable, since NOT ALL html elements have this method, a `<button>` is just ONE of them...

### 2 Solutions:
1. Optional Chaining Operator `?` (even JS)
```ts
btn?.addEventListener("click", function() {
    alert("Clicked!!!");
});
```

2. TS Non-null Assertion Operator `!`
- By the variable declaration, follow the definition with a trailing `!`, this will tell TS that the variable/element/id DOES EXIST, and it will let methods be applied to the varaible without complaints.
- This is a little risky to be doing in general, but if you KNOW the variable/id/element exists, it saves you from optionally chaining at every method application or use of the element/variable/id.
```ts
const btn = document.getElementById("btn")!;

btn.addEventListener("click", function() {
    alert("Clicked!!!");
});
```
---
## TS worrying about something being `null` is one of its core fundamentals, so the non-null assertion undermines its job. This should be used sparingly, and not in an instance where `null` could be returned during runtime.