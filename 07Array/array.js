// Syntax in array
// Remember You cannot change the data types of the array if its mentioned explicitly to the array
// For Normal String Array
var vegetables = ["LadyFinger", "Potato", "Onion",];
vegetables.push("Cauliflower");
// For Numerical Array
var numbers = [45, 66, 23, 58];
numbers.push(12);
// An Empty array
var empty = [];
// empty.push(45)  // Here you cannot push anything as it is defined to be an empty type array
// alternate SYNTAX
var num = [5, 6, 84, 89];
// Here we are giving user type which we defined above   
var newUser = [
    {
        name: "Ritik",
        isActive: false
    },
    {
        name: "Jack",
        isActive: true
    },
    {
        name: "Carl",
        isActive: false
    }
];
newUser.push({ name: "Heck", isActive: false });
// Syntax for Array of Array || type[][]
var newArray = [
    [45, 89, 98],
    [8, 9, 90]
];
newArray.push([12, 67, 990]);
