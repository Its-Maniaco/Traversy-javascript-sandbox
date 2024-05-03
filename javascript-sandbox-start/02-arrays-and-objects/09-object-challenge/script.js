const library = [
    {
        title: 'Book 1',
        author: 'author 1',
        status: {
            own: true,
            reading: false,
            read: false
        } 
    },
    {
        title: 'Book 2',
        author: 'author 2',
        status: {
            own: true,
            reading: false,
            read: false
        } 
    },
    {
        title: 'Book 3',
        author: 'author 3',
        status: {
            own: true,
            reading: false,
            read: false
        } 
    }
]

console.log(library)

// Step 2
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// Step 3
const {title: firstBook} = library[0]
console.log(firstBook)

// Step 4
const jsonParsed = JSON.stringify(library)
console.log(jsonParsed)