# Working With The DOM

### Type Defining HTML Elements, Events, etc.
- Its already built in and aware just like JS!
- Hover over the variable and click > "*Go To Type Definition*"

### How does TS know this, How do we add/change the predefined Types?

- can change from the deafult that uses all DOM API manipulation and Types:
```JSON
"lib": []

```
- If we comment this in, we declare that it should clear its library of types, we can declare which libraries to include in its knowlede base.
```JSON
"lib": [
    "DOM",
    "ES2021"
],

```
- Can find it in `lib.dom.d.ts` -> Library Type Definition files extra `.d` for "declarations".
