// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
console.log(a);
a = 10 && 20 && 30;
console.log(a);
a = 10 && 0 && 30;
console.log(a);
a = 10 && '' && 0 && 30;
console.log(a);



const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Will return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is null or undefined note: null or undefined, not falsey

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);