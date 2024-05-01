// Template literals -> ` `
let s;
const name = 'John'
const age = 20

s=`Hello my name is ${name} and my age is ${age}`
console.log(s)

// Properties and methods
// We can use these on string even though primitive type because it works like this
// const s = new String('Hello World) Wrapper aroung to create into object from string
x=typeof s

x=s.__proto__; // show methods and other info for s (here string)
console.log(x)