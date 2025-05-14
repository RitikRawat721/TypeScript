"use strict";
// Protected : access modifier
class User {
    constructor(email, name, userID) {
        this.email = email;
        this.name = name;
        this.userID = userID;
        this._courseCount = 1;
        this.city = "";
        this.pass = ""; // Protected is an Access modifier : When its protected we can access in this class and any class which inherits this class
        this.education = "Computer Sience";
        this.name = name;
        this.email = email;
        this.userID = userID;
    }
    get userEmail() {
        return `This is Your ${this.email}`;
    }
    get courseCount() {
        return `This is your ${this._courseCount}`;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error(`Your course Count Should be more than 1`);
        }
        this._courseCount = courseNum;
    }
    ChangeName(newName) {
        if (newName = "") {
            throw new Error("New Name cannot be empty string");
        }
        this.name = newName;
    }
}
const ritik = new User("rr@gmail.com", "Ritik", "rr1456");
ritik.city = "Bhilai";
// Extending a Class
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changePass() {
        if (this.isFamily) {
            this.pass = "Hsdasad";
            // this._courseCount = 3 // private variables/values cannot be accessed by the class which inherits other class with private values
        }
    }
}
