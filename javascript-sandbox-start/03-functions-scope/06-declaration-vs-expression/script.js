
// yes work
console.log(addDollarSign(100000));
// Function Declaration
function addDollarSign(value) {
    return '$' + value;
  }
  
  // When using declarations, you can invoke the function before the declaration. With expressions, you can not
  console.log(addDollarSign(100));
  
  // No work
  //console.log(addPlusSign(200000));

  // Function Expression
  const addPlusSign = function (value) {
    return '+' + value;
  };
  
  console.log(addPlusSign(200));

  //works
  const test = addPlusSign(20)
  console.log(test)