

class User {

    private _courseCount: number = 1
    city: string = ""   
    readonly education: string = "Computer Sience" 

    constructor(
        public email: string, 
        private name: string, 
        private userID: string){  

        this.name = name
        this.email = email
        this.userID = userID

    }
    // Getters can have Type annotation
    get userEmail(): string{
        return `This is Your ${this.email}`
    }
    get courseCount(): string{
        return `This is your ${this._courseCount}`
    }

    // But Setters cannot have any type annotation
    set courseCount(courseNum: number) {
        if(courseNum <= 1){
            throw new Error(`Your course Count Should be more than 1`)
        }
        this._courseCount = courseNum
    }


    // Private Methods
    private ChangeName(newName: string): void{   // You cannot access this method outside of the class
        if(newName = ""){
            throw new Error("New Name cannot be empty string")
        }
        this.name = newName
    }
}

const ritik = new User("rr@gmail.com", "Ritik", "rr1456")
// ritik.city = 2  // This will throw an error because its a string type
ritik.city = "Bhilai"
// ritik.name // This will give an error