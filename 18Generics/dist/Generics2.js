"use strict";
// Generics with arrow functions
// Array
function getSearchProdcuts(products) {
    const index = 3;
    return products[index];
}
const getExactProduct = (product) => {
    const index = 2;
    return product[index];
};
// Generics with extended types 
// Normal
const newGeneric = (valOne, valTwo) => {
    const newData = {
        valOne,
        valTwo
    };
    return newData;
};
newGeneric("kesaria", "Spongebob");
// With extended Type
const newGeneric2 = (valOne, valTwo) => {
    const newData = {
        valOne,
        valTwo
    };
    return newData;
};
// newGeneric2("spongeBob", "Hellcat") // This will give an error
newGeneric2("Hello", 47);
const weapon = {
    product: "Assault Rifle",
    productID: 5663,
    color: "Black"
};
const newGeneric3 = (valOne, valTwo) => {
    const newData = {
        valOne,
        valTwo
    };
    return newData;
};
newGeneric3("M4A1", weapon);
