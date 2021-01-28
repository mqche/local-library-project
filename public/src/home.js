function totalBooksCount(books) {
  return books.length
  // ABOVE: counts how many objects(aka books) are in the books array
}

function totalAccountsCount(accounts) {
  return accounts.length
  // ABOVE: counts how many objects(aka accounts) are in the accounts array
}

function booksBorrowedCount(books) {
  let falseArr = books.filter((book) =>   //sets falseArr value to filter() method
  book.borrows.some((instance) =>   //iterates through each borrows index
  instance.returned === false) //checks whether returned is strictly equal to *false*. Returns boolean value.
  === true, [])
  // ABOVE: filters books based on boolean value returned from the some() method

  return falseArr.length
  // ABOVE: counts how many objects(aka borrowed books) are in the falseArr array
}

function getMostCommonGenres(books) {
  const genreLog = {}
  const commonGenres = []

  for (const book of books){
    genreLog[book.genre] ? genreLog[book.genre] += 1 : genreLog[book.genre] = 1
  }
  console.log(genreLog)

  for (let i=0; i < Object.keys(genreLog).length; i++){
    commonGenres.push({
      name: Object.keys(genreLog)[i],
      count: Object.values(genreLog)[i]
    })
  }

  return commonGenres.sort((a,b) => a.count > b.count ? -1 : 1).slice(0,5)

  // create an array of all genres
  // create an array for each genre containing all the books in that genre
}

function getMostPopularBooks(books) {
  const commonTitles = []

  for (const book of books) {
    const {borrows, title} = book
    commonTitles.push({
      name: title,
      count: borrows.length
    })
  }

  return commonTitles.sort((a,b) => a.count > b.count ? -1 : 1).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const popTitles = []
  for (const book of books) {
    let theAuthorName
    let count = book.borrows.length
    for (let author of authors){
      const {first, last} = author.name
      if (book.authorId === author.id){
        theAuthorName = `${first} ${last}`
      }
    }
    popTitles.push({
      ...book,
      theAuthorName,
      count
    })
  }
  let sortedPopTitles = popTitles.sort((a,b) => a.count > b.count ? -1 : 1)
  //console.log(sortedPopTitles)

  const popularAuthors = []
  for (const oneTitle of sortedPopTitles) {
    popularAuthors.push({
      name: oneTitle.theAuthorName,
      count: oneTitle.count
    })
  }
  //console.log(popularAuthors)
  return popularAuthors.slice(0, 5)
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
