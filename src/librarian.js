var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library
  }
  greetPatron(patronName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patronName}!`
    }
    else {
    return `Hello, ${patronName}!`
    }
  }
  findBook(bookTitle) {
      for (var i = 0; i < this.library.shelves.fantasy.length; i++) {
        if (bookTitle === this.library.shelves.fantasy[i].title) {
          this.library.shelves.fantasy.splice(i, 1)
          return `Yes, we have ${bookTitle}`
        }
      }
      return `Sorry, we do not have ${bookTitle}`
  }
  calculateLateFee(daysOverdue) {
    return Math.ceil(0.25 * daysOverdue)
  }
}


module.exports = Librarian;
