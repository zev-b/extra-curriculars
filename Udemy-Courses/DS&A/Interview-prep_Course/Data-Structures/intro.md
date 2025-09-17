#  Intro to *DS&A*

- What do they do? 
    - Data Structures are collections of values, the relationships among them, and the functions, operations, or methods that can be applied to the data.

- Why so many?
    - They excel in different things. Some are highly specialized, while others are more generally used.

- But Why?
    - The more time spent in developing, more likely need to expand past an array either by force or for efficiency reasons.

    - *For example:*
    - Map or location data:
        - Use a graph!

    - Need an ordered list like an array, but need **fast** insertion and deletion from both ends, which is lacking with an array?
        - Use a Linked List

    - Web scraping nested HTML:
        - Returns a Tree

    - Need to write code for a scheduler?
        - Binary Heap


## ES2015 Class Syntax
- What is a class? 
     - A blueprint for creating objects with pre-defined properties and methods.

- JS doesnt really have classes, but there is syntactical sugar over the existing prototype-based inheritence. So this isnt *real* OOP.

```js
// The Blueprint: Defining the pattern
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
    }
}

// Instantiating an instance of the class
let firstStudent = new Student('Clark', 'Kent', 4);

console.log(firstStudent.year); // => 4
```

### Instance Methods:
- Methods pertinent to individual instances of the Class. They are their API ( Application Programming interface ).
```js
class Student {
    constructor(firstName, lastName, year, tardies, scores) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return "You have been expelled";
        }
        return `${this.firstName} ${this.lastName} has been tardy ${this.tardies} times`;
    }
    addScore(score) {
        this.scores.push(score);
        return this.score;
    }
    calculateAverage() {
        let sum = this.scores.reduce(function(a, b) {return a + b;});
        return sum / this.scores.length;
    }
}

let firstStudent = new Student('Clark', 'Kent', 4);
console.log(firstStudent.fullName); // => "Your full name is Clark Kent"

firstStudent.markLate();
console.log(firstStudent.tardies) // => 1

firstStudent.addScore(97); // => [97]
firstStudent.addScore(81); // => [97, 81]
firstStudent.calculateAverage(); // => 89 
```

### Class Methods: 
- Methods that are pertinent to classes, and not necessarily for the individual instances. They are often used for utility functions for the class. They are not reachable by an Instance of the class.

- `static` keyword

- Called on the class `Student.{method}`

```js
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    static enrollStudents(...students) {
        // maybe send an email here
        return "ENROLLING STUDENTS";
    }
}

let chloe = new Student("Chloe", "Silver");
let bob = new Student("Bob", "Turntable");

Student.enrollStudents([chloe, bob]);
```

### The `this` keyword
- Inside all our **instance** methods and **constructor**, the keyword `this` refers to the object created from that class (also known as an **instance**).