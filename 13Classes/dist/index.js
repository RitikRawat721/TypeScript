"use strict";
// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name
//     }
// }
// The code above is js It will have red lines in the code
// Which by annotating types to the values so that TS can know 
class User {
    constructor(email, name, userID) {
        this.userID = userID;
        this.city = ""; // Because we are not taking this into the constructor we need to provide it with an initial value ""
        this.education = "Computer Sience";
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
}
const ritik = new User("rr@gmail.com", "Ritik", "rr1456");
// ritik.city = 2  // This will throw an error because its a string type
ritik.city = "Bhilai";
// ritik.name // This will give an error
