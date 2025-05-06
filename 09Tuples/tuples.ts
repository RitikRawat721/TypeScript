// Tuples : An Specialized Array
// Making an sequence in data types


// Noraml array
const array: (string | number | boolean)[] = ["asdda", 4555, true, false, "asdd", 5548]
 
// Tuples Array
let newarray: [string, number, boolean] 

newarray = ["sdasds", 546, true] // You need to have he order in data type
// newarray = [true, 546, "sadsda"]

let rgb: [number, number, number]
rgb = [255, 255, 112]


// Using type 
type User = [number, string]
const newUser: User = [45, "Hello World"]

// Athough you can change the value to different data type 
newUser[1] = '45';
newUser.push("Hello")


// Tuples in array of objects is not possible though

export {}
