// Generics
// Without generics we need to give specific type to the fucntion and the arguments in it 
// Or
// We use any type for retrun anything 
// Ex: function identity(arg: number): number{
//               return arg
//      }

// OR

// This not a good use case also
// function identity(arg: any): any{
// return arg
//  } 


// How to make a generic type items
const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): number | boolean | string{
    return val
}

function identity2(val: any): any{
 return val
}

function identityGeneric<Type>(val: Type): Type{ // Generic : Will return the same type as in the argument [<type> or <T> or any other word]
                                                 // Which is not a keyword
    return val
}

// Alternate
function identityGeneric2<T>(val: T): T{ // Generic 
    return val
}


// Using interface as generics

interface Brand{
    name: string,
    products: number
}

function identityGeneric3<Brand>(val: Brand): Brand{
    return val
}

let company: Brand = {
    name: "Nike",
    products: 45
}

identityGeneric3(company)


export {}