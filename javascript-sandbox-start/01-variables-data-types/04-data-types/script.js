// 'Number' type, no 'int' or 'float'.
let x = 10
console.log(x)
x=10.50
console.log(x)

// 'NULL' is empty and different from 'Undefined'
console.log(null)
let y
console.log(y)

const firstName = "John"
console.log(firstName, typeof(firstName), typeof firstName)

const aptNumber = null;
const output = aptNumber;
console.log(output, typeof output);
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null 