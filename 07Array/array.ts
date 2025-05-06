// Syntax in array

// Remember You cannot change the data types of the array if its mentioned explicitly to the array

// For Normal String Array
const vegetables: string[] = ["LadyFinger" ,"Potato", "Onion", ]
vegetables.push("Cauliflower")

// For Numerical Array
const numbers: number[] = [45, 66, 23, 58]
numbers.push(12)

// An Empty array
const empty: [] = []
// empty.push(45)  // Here you cannot push anything as it is defined to be an empty type array

// alternate SYNTAX
const num:Array<number> = [5, 6, 84, 89]


// Array using type values 

type User = {
    name: string
    isActive: boolean
}
             // Here we are giving user type which we defined above   
const newUser: User[] = [ // This array of objects should follow the type of string and boolean values [It cannot be empty]
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
]

newUser.push({name: "Heck", isActive: false})


// Syntax for Array of Array || type[][]

const newArray: number[][] = [
    [45, 89, 98],
    [8, 9, 90]
]

newArray.push([12, 67, 990])

export {}