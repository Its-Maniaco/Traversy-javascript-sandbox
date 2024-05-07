let output

output = document.all
output = document.all[12]

output = document.documentElement
/* aria* - aria-* attributes: 
These are part of the Accessible Rich Internet Applications (ARIA) specification and 
are used to enhance the accessibility of web content for users with disabilities. They provide additional information about the purpose, state, and properties of elements. 
For example, ariaAtomic, ariaChecked are used to indicate whether an element's content is updated atomically, whether the element is busy, respectively.
*/
console.log(output)

output = document.body
console.log("BODY: ", output)
output = document.body.children
console.log("BODY CHILD: ", output)

// Turn an HTMLCollection into an array
console.log(typeof document.forms)
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));