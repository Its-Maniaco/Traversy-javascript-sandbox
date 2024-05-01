let amount = "100"
//Parsing string to number
//amount = parseInt(amount)
//amount = +amount
amount = Number(amount)
console.log(amount, typeof(amount))

//Number to string
/* This works even though amount 2 is primitive type because
 c/a autoboxing. JavaScript automatically converts it to its corresponding object wrapper (e.g., Number, String, Boolean), executes the method, and then converts it back to a primitive value.
*/
 let amount2=100
 //amount2 = String(amount2)
amount2=amount2.toString()
console.log(amount2, typeof amount2)