// STRING
let greeting: string = "Hello World"

// greetings = 4 || Ts will not allow this cause string type variable cannot be re-defined as an number and vice-versa

let id: number = 456

// ADDING NUMBER AND STRING into A STRING
let add: string = greeting + id;
console.log(add);
// The code above will execute but there are ways to avoid this

// BOOLEAN
let loggedIn: boolean = false



// TYPE INFERENCE
let age: number = 20 // This way of anotation [putting number type] is not a good practice
// in some place this is use full

let percentage = 75.5
percentage.toFixed() // If you hover you mouse on the percentage it will show that the value is a number 
                     // This much ts can know by itself
                     


export {}                