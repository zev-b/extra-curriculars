# Interfaces

- ### Interfaces serve almost the exact same purpose as type aliases (with a slightly different syntax).

- ### We can use them to create reusable, modular types that describe the shapes of objects

- ### Very similar to `type` aliases aside from syntax, but have differences (see later in section)
- ### No `=` sign (diff than `type`)
- ### Can use `,` or `;`
```ts
interface Person {
    name: string;
    age: number;
}
// use the type alias in the annotation
const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${age}!`;
}

sayHappyBirthday({name: 'Larry', age: 42});


interface Point {
    x: number;
    y: number;
}

// optional properties
interface Point {
    x: number;
    y: number;
    color?: string;
}
// readonly modifier
interface Point {
    readonly id: number;
    x: number;
    y: number;
    color?: string;
}
```