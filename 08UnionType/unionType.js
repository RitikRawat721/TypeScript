"use strict";
// Union Type in TS
Object.defineProperty(exports, "__esModule", { value: true });
// When you don't know the data type which you are going to use insted of using "any" we will use Union Type
// Union Type is an combination of 2 or more data types [variable/array/objectName: type | type | type]
// Here we have defined more 3 data tpes for our variable so if need you can change the value to some other data type
var Vaccination = 0;
Vaccination = "1";
Vaccination = false;
var newUser = {
    name: "Ritik",
    id: 45,
    isActive: 0
};
// In A Function
function getId(user) {
    if (typeof user.id === "string") {
        return user.id.toLowerCase();
    }
    return user.id;
}
// In Array 
var data = [45, 35, "54"];
// Literal Type 
var seatAllotment;
//  seatAllotment = "crew"
seatAllotment = "aisle";
seatAllotment = "window";
