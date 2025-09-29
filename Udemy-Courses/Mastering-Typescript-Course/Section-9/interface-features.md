# Adding a Property to An Existing Interface
- ### Reopening Interfaces
```ts
// imported interface
interface Dog {
    name: string;
    age: number;
}

// Adding (not overriding, just reopening)
interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 2,
    breed: "Australian Shepherd",
    bark() {
        return "Wuff";
    },
};
```
# Extend/Inherit from an Interface
- ### The `extends` keyword

```ts
interface ServiceDog extends Dog {
    job: "drug sniffing" | "bomb" | "guide dog";
}

const chewy: Dog = {
    name: "Chewy",
    age: 2,
    breed: "Aztec Shepherd",
    bark() {
        return "Wowff";
    },
    job: "bob",
};
```
# Multiple Inheritence
- ### `extends ___,___ ...`
```ts
interface Person {
    name: string;
}
interface Employee {
    readonly id: number;
    email: string;
}
interface Engineer extends Person,Employee {
    level: string;
    skills: string[];
}

const pierre: Engineer = {
    name: "Pierre",
    id: 63524,
    email: "pierre@gmail.com",
    level: "senior",
    skills: ["JS", "Typescript"],
}