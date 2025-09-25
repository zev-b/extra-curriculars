# Intersecting Types
- We can have multiple types and combine them with a `&`

```ts
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};


type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

// Extends and adds on from intersecting types...
type CatDog = Cat & Dog & {
    age: number;
};

const catDog: CatDog = {
    numLives: 99,
    breed: "other",
    age: 64
}