//number 1
function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
}

//number 2
function addBook(libraryName, bookName) {
  var bookShelves = Object.keys(libraryName.shelves)
  var bookGenre = bookName.genre
  for (var i = 0; i < bookShelves.length; i++){
    if (bookGenre === bookShelves[i]) {
      libraryName.shelves[bookGenre].push(bookName)
    }
  }
}

//number 3
function checkoutBook(libraryName, bookTitle) {
     var result = `You have now checked out ${bookTitle} from the ${libraryName.name}`;
     var error = `Sorry, there are currently no copies of ${bookTitle} available at the ${libraryName.name}`

     var bookShelves = Object.keys(libraryName.shelves)

     for (var i = 0; i < bookShelves.length; i++){ //from shelves take one genre
       var oneShelf = bookShelves[i]
       for (var w = 0; w < libraryName.shelves[oneShelf].length; w++){ //under choosen genre take the first book object
         if (bookTitle === libraryName.shelves[oneShelf][w].title){ //check if the given book title matches the choosen book from the shelf
           libraryName.shelves[oneShelf].splice(w, 1) //if the book matches, delete the book from the shelves using its index
           return result //print the message of the completed task
         }
       }
     }
     return error
}

module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
