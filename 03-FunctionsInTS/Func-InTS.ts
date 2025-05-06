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
function addTen(num: number){      // Here we annotate num as a number 
    return num + 10
}

addTen(5)     // If the parameter is changed to a string or an other type will give an error


// 2.
function getUpper(val: string){
    return val.toUpperCase()
}
getUpper("hello")



// 3. 
function signUpUser(name: string, email: string, isPaid: boolean){
    console.log(`Hello ${name}. This your status ${isPaid} and email ${email}`)
}
signUpUser("Ritik", "myEmail@.com", false ) // If any value is missing TS will throw an error


// 4. TO PUT a DEFAULT VAlUE
function sportsData(name: string, sport: string, stillPlaying: boolean = false){ // Here we have assigned a by default value to the stillplaying parameter
    console.log(`data added- name: ${name}, sport: ${sport}, stillplaying: ${stillPlaying}`)
}
sportsData("Ritik", "Football",) // Here we didn't put any value for the stillplaying para but becasue it have default value we will not get any error




export {}   