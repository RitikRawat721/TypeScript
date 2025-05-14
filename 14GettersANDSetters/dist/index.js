"use strict";
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = "";
        this.education = "Computer Sience";
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
    // Getters can have Type annotation
    get userEmail() {
        return `This is Your ${this.email}`;
    }
    get courseCount() {
        return `This is your ${this._courseCount}`;
    }
    // But Setters cannot have any type annotation
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error(`Your course Count Should be more than 1`);
        }
        this._courseCount = courseNum;
    }
    // Private Methods
    ChangeName(newName) {
        if (newName = "") {
            throw new Error("New Name cannot be empty string");
        }
        this.name = newName;
    }
}
const ritik = new User("rr@gmail.com", "Ritik", "rr1456");
// ritik.city = 2  // This will throw an error because its a string type
ritik.city = "Bhilai";
// ritik.name // This will give an error
