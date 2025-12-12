# Recap of JS Classes

### Classess are templates for creating objects in JavaScript. They contain a few different important pieces which allow for creation and extension of customized (and nicely organized) objects.

```js
// Our Blueprint for a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.score = 0;
        // this.numLives = 10;
    }
    greet() {
        return `Hello $(this.name)!`;
    }
}

// Creating a person using the blueprint
const jimmy = new Person('Jimmy', 25);

// Using some methods that our new object has based on the blueprints
jimmy.greet(); // Hello Jimmy!
```


# Class Fields
### If we wanted to add score and numLives to a player, we previously would have to define it as shown below in the constructor...
```js
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
        this.numLives = 10;
    }
    greet() {
        return `Hello $(this.first)!`;
    }
}
```
### But we can also...
- Note: These are hard-coded values syntactic sugar called class fields. We cannot pass in values when creating a new instance of the class to change the values for the variables set as class fields
```js
class Player {
    score = 0;
    numLives = 10;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
    }
    greet() {
        return `Hello $(this.first)!`;
    }
}
```

# Private Fields
- We don't want a player to have a negative score or negative value for numLives. So we can make it private.
- In the past this was held on an honor system and conventionally defined with an `_` proceeding the value to indicate it something reserved for a developer, and not to be changed. But it still could be!
- Instead we...
- **When you proceed the value with a `#` symbol this tells JS that the var is only available within the class**
- Can also proceed a constructor value with the hash as well: `this.#secret = 'you lose';`
- Can also make methods private with the same `#` syntax proceeding the method name.

# Getters/Setters
- We can use the JS ability to create synthetic properties in the class. like player1.fullName even though there is no property called fullname.
- use the `get` keyword to tell jS to make the method name a property of the class instance.
---
- Use the `set` keyword...like above

- Even though these getters and setters are not real values, they are computed, but accessible like they are properties on the object.

# Static Properties & Methods