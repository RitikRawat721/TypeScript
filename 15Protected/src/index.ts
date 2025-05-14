// Protected : access modifier

class User {

    private _courseCount: number = 1
    city: string = ""
    protected pass: string = "" // Protected is an Access modifier : When its protected we can access in this class and any class which inherits this class
    readonly education: string = "Computer Sience" 

    constructor(
        public email: string, 
        private name: string, 
        private userID: string){  

        this.name = name
        this.email = email
        this.userID = userID

    }
    get userEmail(): string{
        return `This is Your ${this.email}`
    }
    get courseCount(): string{
        return `This is your ${this._courseCount}`
    }

    set courseCount(courseNum: number) {
        if(courseNum <= 1){
            throw new Error(`Your course Count Should be more than 1`)
        }
        this._courseCount = courseNum
    }

    private ChangeName(newName: string): void{   // You cannot access this method outside of the class
        if(newName = ""){
            throw new Error("New Name cannot be empty string")
        }
        this.name = newName
    }
}

const ritik = new User("rr@gmail.com", "Ritik", "rr1456")
ritik.city = "Bhilai"


// Extending a Class

class SubUser extends User {
    isFamily: boolean = true;
    changePass(){
        if(this.isFamily){
            this.pass = "Hsdasad"
            // this._courseCount = 3 // private variables/values cannot be accessed by the class which inherits other class with private values
        }
    }
}