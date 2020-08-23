//number 1
function createTitle(title) {
  return `The ${title}`
}

//number 2
function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns,
  }
}

// number 3
function saveReview(review, listOfReviews) {
  listOfReviews.push(review)
  for (var i = 0; i < listOfReviews.length-1;i++){
    if(listOfReviews[i] === review) {
      listOfReviews.pop()
      break
    }
  }
  return listOfReviews
}

//number 4
function calculatePageCount(pagesTotal) {
  return pagesTotal.length * 20
}

//number 5
function writeBook(bookName, bookCharacter, genreName) {
  return bookName = {
    title: bookName,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookName),
    genre: genreName,
  }
}

//number 6
function editBook(name) {
  return name.pageCount = Math.floor(name.pageCount / 4 * 3)
}

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
