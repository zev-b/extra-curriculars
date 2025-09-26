# Literal types
- Literal types are not just types - but the values themselves too!


```ts
type Day = 
    | "Monday" 
    | "Tuesday" 
    | "Wednesday" 
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

let today: Day = "Monday";

let now: Day = "Mon"; // will error, not of type 'Day'!
```