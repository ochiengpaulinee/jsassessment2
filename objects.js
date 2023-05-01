const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
    isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
    isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
    1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
    isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
    ];

    // 1. Create a function called getAvailableBooks that returns an array of all available
// books.

// function getAvailableBooks(){
//     available = [];
//     for(let x =0;x<books.length;x++){
//         if(books[x]==books.isAvailable){
//             available.push(books[x])
//         }
//     }
//     return available
// }
// console.log(getAvailableBooks(books))
function getAvailableBooks(){
    availability= [];
    for(let i=0;i<books.length;i++){
    if(books.isAvailable = true){
        availability.push(books[i])
    }
    return availability
}
}
console.log(getAvailableBooks())



// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(){
    bookauthor = [];
    for(let i=0;i<books.length;i++){
    if(books.author ='J.D. Salinger'){
        bookauthor.push(books[i])
    }
    return bookauthor
}
}
console.log(getBooksByAuthor())



// 3. Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(){
    books.newObject= {
        title:"Born a crime",
        author:"Trevor Noah",
        publicationYear:2000,
        isAvailable:true
    }
    return books

}
console.log(addNewBook())



// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the library, the
// function should return a message indicating that the book is not available.

// function checkoutBook(){
//     books.TheOdyssey=false
//     if(books.TheOdyssey in books){
//         console.log("the book is not available")
//     }
// }
// checkoutBook()


// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.

// function returnBook(){
//     books[title].isAvailable = true
//     if()

// }