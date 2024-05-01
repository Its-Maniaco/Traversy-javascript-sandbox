// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let myNewString = myString
myNewString = myNewString[0].toUpperCase()+myNewString.substring(1) // can use .slice(1)
console.log(myNewString)