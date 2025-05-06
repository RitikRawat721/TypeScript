// Union Type in TS

// When you don't know the data type which you are going to use insted of using "any" we will use Union Type

// Union Type is an combination of 2 or more data types [variable/array/objectName: type | type | type]

// Here we have defined more 3 data tpes for our variable so if need you can change the value to some other data type
let Vaccination: string | number | boolean = 0
Vaccination = "1"
Vaccination = false



// For a Type

type User = {
    name: string
    id: string | number
    isActive: boolean | number
}

let newUser: User  = {
    name: "Ritik",
    id: 45,
    isActive: 0
}


// In A Function

function getId(user: User): number | string {
    if(typeof user.id === "string"){
       return user.id.toLowerCase()
    }
    return user.id
}


// In Array 

const data: (string | number)[] =  [45, 35, "54"]


// Literal Type 

let seatAllotment: "aisle" | "middle" | "window"
//  seatAllotment = "crew"

seatAllotment = "aisle"
seatAllotment = "window"


export {}
