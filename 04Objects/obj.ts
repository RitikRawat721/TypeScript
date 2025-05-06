// Syntax of making an object is same as in JS
const user = {
    name: "Ritik",
    isPaid: true,
    email: "myEmail@gmail.com"
}


function createUser({name: string, isPaid: boolean}){    // we  havent  mentioned any email but still theres a way you can do

}
let newUser = {name: "Ritik", isPaid: true, email: "rr@gmail.com"} // You can define the userdata in a variable 

createUser(newUser)   // and pass the variable in the function call and U will not get any error  // But Theres a much better way then this [for later]
createUser({name: "Ritik", isPaid: false})


// Return an Object but annoting return type to be an object
function createCourse():{}{
    return{}      // Here the value can be empty or with key and value
}

// Annoting specific object type
function newCourse():{name: string, price: number}{ // It is mandatory for the function to retrun these 2 values in the object
    return {name: "JavaScript", price: 499}
}

export {}