//number 1
function shelfBook(bookName, shelfName) {
    if (shelfName.length < 3){
        shelfName.unshift(bookName)
    }
}

//number 2
function unshelfBook(bookTitle, shelfName) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookTitle) {
      var bookLocation = i
    }
  }
  shelfName.splice(bookLocation, 1)
}

//number 3
function listTitles (shelfName) {
  var listOfTitles = ""
  for (var i = 0; i < shelfName.length; i++){

    if ( i < shelfName.length - 1) {
      listOfTitles += shelfName[i].title + ", ";
    }
    else if (i === shelfName.length - 1) {
      listOfTitles += shelfName[i].title;
    }
  }
  return listOfTitles
}

//number 4
function searchShelf (shelfName, bookName) {
  for (var i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === bookName) {
      return true
      break
    }
  }
return false
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
