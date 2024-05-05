let d
// local date (MM DD YY) time and timezone, object type
d = new Date();
console.log(d, typeof d)

// Set a specific date.
d = new Date(2021, 1, 10)
console.log(d)

//get timestamp for a specific date
d = new Date('03/12/1987 11:33:42')
d = d.getTime()
console.log(d)