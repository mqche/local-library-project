function findById (array, id){
  return array.find((index) => index.id === id)
  // ABOVE: Uses find method to loop through each array[index]
  // comparing array[index].id key to the argument 'id'
}

function findAuthorById(authors, id) {
  return findById(authors, id)

}

function findBookById(books, id) {
  return findById(books, id)
  // calls findById helper function with given arguments
}

function partitionBooksByBorrowedStatus(books) {
  let falseArr = books.filter((book) => // sets falseArr value to filter() method
  book.borrows.some((instance) => // iterates through each borrows index
  instance.returned === false) // checks whether returned is strictly equal to *false*. Returns boolean value.
  === true, []) // filters books based on boolean value returned from the some() method

  let trueArr =  books.filter((book) => 
  book.borrows.some((instance) => 
  instance.returned === false) 
  === false, [])
  // ABOVE: same as the previous except .filter() filters out false instead of true

  let arr = [falseArr, trueArr]
  // ABOVE: puts the falseArr and the trueArr into a single array

  console.log(falseArr) //test
  console.log(trueArr) //test
  return arr // returns the array containing falseArr and trueArr
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book
  let borrowLog = borrows.map((instance) => {
    for (let account of accounts){
      if (instance.id === account.id){
        return {...instance, ...account}
      }
    }
  })
  
  if (borrowLog.length > 10){
    return borrowLog.slice(0, 10)
  } else {
    return borrowLog
  }
  // iterate through borrows array
  // store all user id's and return status
  // fill each user object with their info
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
