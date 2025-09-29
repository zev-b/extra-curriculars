# Adding Methods to an `interface`


```ts
interface Person {
    readonly id: number;
    first: string;
    last: string;
    nickname?: string;
    sayHi: () => string; // setting property to a function that takes no args and returns a string
    
    // alt equal syntax
    sayHi(): string;
}

// Now the person...
const thomas: Person = {
    first: "Thomas",
    last: "Hardy",
    nickname: "Tom",
    id: 6342231,
    sayHi: () => {  // ts will complain if args are supplied
        return 'Hello';
    },
};

```
# Method Parameters

```ts
interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Blue shoes",
    price: 100,
    applyDiscount(amount: number) {
        const newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4)); // => 60
```