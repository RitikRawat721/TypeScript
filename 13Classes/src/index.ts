// class User {
//     constructor(email, name){
//         this.email = email;
//         this.name = name
//     }
// }

// The code above is js It will have red lines in the code
// Which by annotating types to the values so that TS can know 

class User {
   public email: string // any varible without private keywords is public and you can explicitly mention this
   private name: string // Vairbales that contains private are accessible only inside the class // ALTERNATE: #email [but this js code]
    city: string = ""   // Because we are not taking this into the constructor we need to provide it with an initial value ""
    readonly education: string = "Computer Sience" 
    constructor(email: string, name: string, private userID: string){  // Rather Than above you put public and prive here in the params
        this.name = name
        this.email = email
        this.userID = userID
    }
}

const ritik = new User("rr@gmail.com", "Ritik", "rr1456")
// ritik.city = 2  // This will throw an error because its a string type
ritik.city = "Bhilai"
// ritik.name // This will give an error