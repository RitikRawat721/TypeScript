// Read Only and OPTIONAL


type User = {
    readonly _id: string   // Readonly values cannot be changed [use readonly keyword before the value]
    name: string,
    email: string,
    isActive: boolean
    creditCard?: number   // putting a "?" in the end of the key will make it optional
}

let myUser: User = {
    _id : "158455",
    name: "Ritik",
    email: "rr@gmail.com",
    isActive: false
}

// myUser._id = " 5448522" // This won't allow you to re assign as it is a read only



// Combining 2 or more Type alias

type cardNumber ={
    cardnumber: number
}

type cardDate = {
    carddate: string
}

type cvvNumber = {
    ccvnumber: number
}

type cardDetails = cardNumber & cardDate & cvvNumber


export {}