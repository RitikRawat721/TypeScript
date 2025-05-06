// TYPE ALIASES
// Type annotations for any object or name Which can be used multiple times throughout

type User = {    // 
    name: string,
    id: number,
    email: string,
    isActive: boolean
}

function createUser(user: User): User{  // here the obj will take data which is following the annotation of the obj data // and returning the same way
return {name: user.name, id: user.id, email: user.email, isActive: user.isActive}
}

createUser({name: "Ritik", id: 56, email: "rr@gmail.com", isActive: true})


export {}
