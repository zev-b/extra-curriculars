# Working With DOM Events:

- Lets say we are dealing with an input and button elements, wrapped in a form. We have the form listening on the submit event to print to the console a message. But the default behavior of the browser when hitting submit is that it refreshes the window of the browser on submission. So we want to access the `e.preventDefault()` method on the event obj, so it wont cause the window to refresh and lose the message we are printing...

```ts
const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("SUBMITTED!");
});
```
- Inside the context of the `addEventListener()` args, TS is able to determine that `e`, the event has a method of `preventDefault` even though it wasnt directly typed, and is no better than a generic `e` anywhere else.
- If the second argument, the callback function would be defined outside of this context, even a line before, TS will complain about e being `generic`/`any` and the method being unknown to `e`, since it is missing in context.
- In an out of context declaration scenario, you would need to tell typescript that `e` is an `Event`:
    - ```ts
        (e: SubmitEvent) // or just Event at least 
    ```