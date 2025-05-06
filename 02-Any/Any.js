// Any : When TS cannot identify the value of a varible, Ts will declare it as any [string, number, boolean]
//     : TS turns of the type checking for any varibale with TYPE "any" 
// To avoid any value with type any 
// In tsconfig.json 
// You can use the compiler flag : "noImplicitAny"
// This will flag any implicit any as an "Error"
var hero; // a variable with no assignment 
function getHero() {
    return "Thor"; // This can be change and TS will not throw any error because there is no type on hero varibable 
}
// The assignment below is not a good use case
hero = getHero(); // after assigning the hero variable will show it as any
// CORRECT WAY BELOW
var villain;
function getVillain() {
    return "Thanos"; // Now if this string is change to any other type rather than string TS will throw an error
}
villain = getVillain();
