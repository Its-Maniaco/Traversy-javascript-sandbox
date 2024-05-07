// Get child elements from a parent
const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1].innerText;
console.log(output)
output = parent.children[1].className;
console.log(output)
output = parent.children[1].nodeName;
console.log(output)

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';

// Get parent elements from a child
const child = document.querySelector('.child');
output = child.parentElement;

// Get sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem;
output = secondItem.nextElementSibling;

console.log(output)