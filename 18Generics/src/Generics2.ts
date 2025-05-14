// Generics with arrow functions

// Array

function getSearchProdcuts<T>(products: T[]): T{
    const index = 3
    return products[index]
}

const getExactProduct = <T>(product: T[]): T => {
    const index = 2
    return product[index]
}

// Generics with extended types 

// Normal
const newGeneric = <T, U>(valOne: T, valTwo: U): object => { 
    const newData = {
        valOne,
        valTwo
    }

    return newData
}

newGeneric("kesaria", "Spongebob")

// With extended Type
const newGeneric2 = <T, U extends number>(valOne: T, valTwo: U): object => {
    const newData = {
        valOne,
        valTwo
    }
    return newData
}

// newGeneric2("spongeBob", "Hellcat") // This will give an error
newGeneric2("Hello", 47)

// Extended Generic With interface

interface DataBase {
    product: string,
    productID: number,
    color: string
}
const weapon = {
    product: "Assault Rifle",
    productID: 5663,
    color: "Black"
}

const newGeneric3 = <T extends string, U extends DataBase>(valOne: T, valTwo: U): object => {
    const newData = {
        valOne,
        valTwo
    }

    return newData
}


newGeneric3("M4A1", weapon)