// Ways to declare a variable
// var, let, const

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     owercase

//var has been phased out in favour of const
//var and let are used more for global scope 
let firstName = "John"
let lastName = "Doe"
console.log(firstName, lastName)

//uninitalized
let y
// wont work with const
//const test

//const cannot be reassigned
const x=100
console.log(x)
// x=99
// console.log(x)

//objects cannot be reassigned
const person = {
    name: "John"
}
console.log(person)
/* wont work
person = {
    name: "Test"
}
console.log(person) */

//Works
person.name = "Johnny"
person.email = "john@email.com"
console.log(person)