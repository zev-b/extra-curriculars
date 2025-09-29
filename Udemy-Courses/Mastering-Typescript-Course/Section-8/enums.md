# Enums

- ### Enums allow us to define a set of named constants. We can give these constants numeric or string values.  

- ### By default the values of the enum constants are numbered from `0`, we can change this default though to what we want


- ### There's quite a few options when it comes to enums!
```ts
// Numeric Enums
enum Responses {
    no, // 0
    yes, // 1
    maybe, // 2
}
    // can also assign values
    enum Responses {
        no = 2,
        yes, // 3
        maybe, // 4
    }
    //
    enum Responses {
        no = 2,
        yes = 10,
        maybe = 24,
    }

// String Enums
enum Responses {
    no = 'No',
    yes = 'Yes',
    maybe = 'Maybe',
}

// Heterogenous Enums
enum Responses {
    no = 0,
    yes = 1,
    maybe = 'Maybe',
}

// Demo
enum OrderStatus {
    PENDING, // 0
    SHIPPED, // 1
    DELIVERED, // 2
    RETURNED, // 3
}

// can 'notate' ino the constants using the type enum name
const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
    return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

```

# What they compile to...
- ### They actually impact into additional code!
- ### Takes a form of a JS Object
- ### Some people don't like this, and have moved away from this...

```ts
enum OrderStatus {
    PENDING, 
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const order = {
    orderNumber: 2028263647,
    status: OrderStatus.PENDING
}

    // compiles to:
    var OrderStatus;
    (function (OrderStatus) {
        OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
        OrderStatus[OrderStatus["SHIPPED"] = 0] = "SHIPPED";
        OrderStatus[OrderStatus["DELIVERED"] = 0] = "DELIVERED";
        OrderStatus[OrderStatus["RETURNED"] = 0] = "RETURNED";
    })(OrderStatus || (OrderStatus = {}));
    const order = {
        orderNumber: 2028263647,
        status: OrderStatus.PENDING
    }
```

### Alternatively, you can:

- ### Using `const enum`, will replace all existance of that type in the object with its underlying value.
```ts
const enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}
const order = {
    orderNumber: 2028263647,
    status: OrderStatus.PENDING
}

    // compiles to:
    const order = {
        orderNumber: 2028263647,
        status: 0 /* OrderStatus.PENDING */    // <--- Compiler Comment
    }
```