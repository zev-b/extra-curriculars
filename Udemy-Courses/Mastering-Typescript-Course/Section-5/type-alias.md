# Type Alias
- Instead of typing out object types in an annotation, we can declare them separately in a type alias, which is simply the desired shape of the object.
- This allows us to make ur code more readable, and even reuse the types elsewhere in our code.

```ts
// type alias
type Person = {
    name: string; 
    age: number;
};

// use the alias in an annotation
const sayHello = (person: Person) => {
    return `Hello ${person.name}, the ${person.age} year old!`;
};

type Coordinate = {
    x: number;
    y: number;
};

function doublePoint(point: Coordinate): Coordinate {
    return { x: point.x * 2, y: point.y * 2 };
}

// alias for a primitive, for a variable to reuse
type Mynum = number;