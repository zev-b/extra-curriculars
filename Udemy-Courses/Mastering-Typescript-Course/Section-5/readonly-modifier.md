# The Readonly Modifier
- In object types, we have a special modifier called the `readonly` modifier keyword that tell TS that we cannot write to this propperty.

```ts
type = User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 1264,
    username: "dudeman"
}

user.id = 6342;
    // this will error since we cannot write to the id property that was assigned the readonly modifier
```