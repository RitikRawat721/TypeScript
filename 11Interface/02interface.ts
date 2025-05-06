// Interface with extensions/library


interface User {
    readonly dbID: number
    email: string,
    userId: number,
    googleId?: string 
}


// Adding more properties even you hace initiazized the interface before all though it will be in the middle of the code 
// when you want to add


// THIS is called REOPENING of INTERFACE
interface User {
    gitHubToken: string  // Adding another value with annotation in the existing interface
}

const newUser: User = {
    dbID: 4445,
    email: "myEmail.com",
    userId: 12,
    googleId: "478",
    gitHubToken: "rr1567"
}


// Inheritance of an interface [using : extends]

interface Admin extends User {
    role: "dev" | "debug" | "Tester" | "Learner"
}

const newAdminUser: Admin = {   // Use the annotation which is extend the other interface Admin > User
    dbID: 4445,
    email: "myEmail.com",
    userId: 12,
    role: "debug",
    googleId: "478",
    gitHubToken: "rr1567"
}


// Types cannot be extend as the interface 


export {}