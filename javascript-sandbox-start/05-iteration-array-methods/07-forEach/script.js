const arr1 = ['1','2','3','4']

// forEach -> loops through array
// anonymous function
arr1.forEach((num) => console.log(num))
//alternative - note we are not executing the function
arr1.forEach(function(num) {
    console.log(num)
})
// We can also pass in the index and original array
arr1.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Array of objects
const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ];
  
  socialObjs.forEach((item) => console.log(item.url));