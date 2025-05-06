// INTERFACE

interface User {
    readonly dbID: number
    email: string,
    userId: number,
    googleId?: string 
}

// Its similar to tuple but for objects & data should follow the sequence of the interface
const ritik: User = {
    dbID: 1406,
    email: "rr@gmail.com",
    userId: 2107,
    googleId: "rr14062"
}
ritik.email = "rr1406@gamil.com"
// ritik.dbID = 15  [readonly cannot be changed]


// Function in ritik.dbID = 15interface

interface Admin {
    email: string,
    pass: number,
    startTrial: () => string,  // 1st way to define a function // Annotation Is to retrun a string from the function
    // OR
    adminStart(): number,
    authentication(key: string): number       // 2nd // Annotation Is to retrun a number from the function
}

const adRitik: Admin = {
    email: "admin@gmail.com",
    pass: 1846668,
    startTrial(){
        return "Hello World"
    },
    adminStart(){
        return 1
    },
    authentication(keyAdmin: "myid"){
        return 4512
    }
} 


export {}