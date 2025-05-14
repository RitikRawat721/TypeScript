"use strict";
// Generics
// Without generics we need to give specific type to the fucntion and the arguments in it 
// Or
// We use any type for retrun anything 
// Ex: function identity(arg: number): number{
//               return arg
//      }
Object.defineProperty(exports, "__esModule", { value: true });
// OR
// This not a good use case also
// function identity(arg: any): any{
// return arg
//  } 
// How to make a generic type items
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identity2(val) {
    return val;
}
function identityGeneric(val) {
    // Which is not a keyword
    return val;
}
// Alternate
function identityGeneric2(val) {
    return val;
}
function identityGeneric3(val) {
    return val;
}
let company = {
    name: "Nike",
    products: 45
};
identityGeneric3(company);
