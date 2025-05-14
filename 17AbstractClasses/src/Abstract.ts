// Abstract Classes [abstract is a keyword which comes before the class]
// These are classes which only provides blueprints for functions 
// In simple words its a class which will give other class functions or methods or values to use and implement
// The methods and functions of an abstract class cannot be used directly outside of the class
// You can extend the abstract to a child class and used the child class to use the functions and methods


abstract class Instagram{
    constructor(
        model: string,
        filter: string,
        burst: number
    ){}

    // The functions inside an class can be abstract also
    abstract getResults(): void // Here what you are doing is that you are tell the class that there is a function 
                                // But the way the function will work we are not giving only that will be a void 
                                // and it will not return anything 

    getInstaKey(): number{
        return 45668
    }                            
}


class InstagramPlus extends Instagram {
    constructor(
        model: string,
        filter: string,
        burst: number,
        filterPlus: boolean
    ){
        super(model, filter, burst)   // Super we use when we have to used the value of another class we are extending
    }

    getResults(){  // We can use the abstarct function here and modify also
        console.log("Production complete")
    }

    getInstaKey(): number {
        return 45667
    }
}

// The assignment below will throw and error because we are trying to use abstarct class which we cannot use
// const rr = new Instagram("v4485", "noraml", 0)

const rr = new InstagramPlus("v4485", "noraml", 0, true)
rr.getInstaKey()
rr.getResults()