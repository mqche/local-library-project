function findAccountById(accounts, id) {
  let found = {} // variable set to empty obj
  for (let accountKey in accounts) { // loop through account objs
    if (accounts[accountKey].id === id) { // compare account id to function argument
      return found = accounts[accountKey] // return corresponding account
    }
  }
}

function sortAccountsByLastName(accounts) {
  return arr = accounts.sort((userA, userB) =>
  // ABOVE: returns whatever the return of the function is. Begins sort() method
  //  that compares two iterations of object.
  userA.name.last.toUpperCase() < userB.name.last.toUpperCase()
  // ABOVE: Sets to lowercase and compares the first letter of the
  //  last name from each iteration of account object.
  ? -1 : 1
  // ABOVE: Following after the ? is what to do if true while
  //  following after the collon is what to do if false.
  // If true, move it to the "left" by one. If false, move to the "right"
  )
}

function numberOfBorrows(account, books) {
  const {id} = account // destructuring account to allow easy access to id
  console.log(id) // test
  let acc = [] // setting empty accumulator variable to return at the end
  
  for (let book of books){ // loop through an array of objects. Each object containing book info.
    console.log(book) // test
    for (let instances in book.borrows){ // loop through array of borrows
      const whoBorrowed = book.borrows[instances].id // set variable for borrow ids for ease
      console.log(whoBorrowed) // test
      if (whoBorrowed === id) { // compare each borrows user id's to the given account id
        acc.push(1) // if above condition is true, add 1 to counter
      }
    }
  }
  return acc.reduce((count, num) => count += num) // return acc containing how many times user borrowed any book
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter((book) => {
    const recent = book.borrows[0]
    return !recent.returned && recent.id === account.id
  })
  .map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
    return {...book, author}
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};


// const {id} = account // destructuring account to allow easy access to id
// //  console.log(id) // test
//   let booksPossessed = [] // setting empty array variable to return at the end
  
//   for (let book of books){ // loop through an array of objects. Each object containing book info.
// //    console.log(book) // test
//     for (let instances in book.borrows){ // loop through array of borrows
//       const whoBorrowed = book.borrows[instances].id // set variable for borrow ids for ease
//       const returned = book.borrows[instances].returned
// //      console.log(whoBorrowed) // test
//       if (whoBorrowed === id) { // compare each borrows user id's to the given account id
//         if (returned === false) {
//           booksPossessed.push(book)
//         }
//       }
//     }
//   }