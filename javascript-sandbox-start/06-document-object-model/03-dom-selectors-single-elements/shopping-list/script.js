// document.getElementById()

console.log(document.getElementById('app-title'));


// Get attributes
console.log(document.getElementById('app-title').id);
console.log(document.getElementById('app-title').className); //eventhough it is class in html file
console.log(document.getElementById('app-title').getAttribute('id')); //therefore better to use

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title'); // returns to first object that is why SL2 not changed
// Get/change content
console.log(title.textContent);
title.textContent = 'Hello World Testing';
title.innerText = 'Hello Again';
title.innerHTML = '<strong>Shopping List</strong>'; //to use html tags too

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'black'; //camel case instead of '-' background-color 
title.style.padding = '10px';
title.style.borderRadius = '10px';

// document.querySelector()

// Use any CSS selector
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText);

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'red';

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list);
const firstItem = list.querySelector('li');
firstItem.style.color = 'blue';