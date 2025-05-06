// You can annotate a function to return a specific data Type
function addFive(num) {
    //return num + "5"  || Error
    return num + 5;
}
addFive(5);
// Another Case
// function getVal(myVal: number): number{
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }
// Here we cannot put more than 1 type of value for return in a function
// in the later chp we will see how to do that
// With Arrow Fucntion
var getHello = function (s) {
    return ""; // returning an empty string is valid
};
// Annoting in Map method
var lang = ["Java", "Python", "R", "MongoDB"];
lang.map(function (onel) {
    return "hero is " + onel;
});
// ERROR FUNCTIONS WITH [void & never]
// void [empty]
function errMsg(error) {
    console.log("error Enconctered" + error);
    // return 400
}
// Never
// The never type represents values whch are never observed. in return type this means that the functions throws an exception or terminates
// the execution of the program.
// never also appears when TS determines there's nothing left in a union
function handleError(errMsg) {
    throw new Error(errMsg);
}
