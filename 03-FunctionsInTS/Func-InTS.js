// GIVING ANNOTATIONS TO PARAMETERS
// WHY
// 1.
// function sumFive(num){
//     return num + 5;
// }
// sumFive("10")
// So in the code above we can see we want to add a number with 5 and return the sum 
// But The value can be assgined as a string or boolean or other type 
// TS will see the value as any and allow it 
// CORRECT WAY BELOW
function addTen(num) {
    return num + 10;
}
addTen(5); // If the parameter is changed to a string or an other type will give an error
// 2.
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hello");
// 3. 
function signUpUser(name, email, isPaid) {
    console.log("Hello ".concat(name, ". This your status ").concat(isPaid, " and email ").concat(email));
}
signUpUser("Ritik", "myEmail@.com", false); // If any value is missing TS will throw an error
// 4. TO PUT a DEFAULT VAlUE
function sportsData(name, sport, stillPlaying) {
    if (stillPlaying === void 0) { stillPlaying = false; }
    console.log("data added- name: ".concat(name, ", sport: ").concat(sport, ", stillplaying: ").concat(stillPlaying));
}
sportsData("Ritik", "Football"); // Here we didn't put any value for the stillplaying para but becasue it have default value we will not get any error
