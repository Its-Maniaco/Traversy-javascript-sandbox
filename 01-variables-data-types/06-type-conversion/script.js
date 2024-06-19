let amount = 'hello';

// Convert string to number
amount = parseInt(amount);
console.log("amount parseInt: ", amount) //NaN
amount = +amount;
amount = Number(amount);

amount = 33
// Convert number to string
amount = amount.toString();
console.log("amount.toString(): ", amount, typeof amount)
amount = String(amount);
console.log("String(amount): ", amount, typeof amount)

// Convert string to decimal
amount = parseFloat(amount);

// Convert number to boolean
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);
