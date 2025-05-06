// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// How to restrict user's Choice

enum SeatChoice {
    AISLE = 10,
    MIDDLE,
    WINDOW
}
// enum automatically increase the value by 1 for the next constant if it's value is not given
const hcSeat = SeatChoice.WINDOW // 10
const hcSeat2 = SeatChoice.MIDDLE // 11
const hcSeat3 = SeatChoice.WINDOW // 12

// Here we have specified string value as well as numeric value with the next one incremented
enum Random {
    Green = "vegetables",   // This will gave a string value
    White = "color",        // Same here
    Purple = 5,             // Here we have a number
    Yellow,                 // Yellow will increment by one here
}

// The enums above will create a function in Js after being compiled 
// A way to make it shorter is to make enum a const 

const enum Fruits {
    Sour = "Orange",
    Sweet = "Apple",
    Banana = 12,
    grapes
}


const fruitQuant = Fruits.Banana  // In Js [const fruitQuant = 12] this will be the output