class Book {
  constructor(title, author, publishDate) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
  }
}

class EBook extends Book {
  constructor(title, author, publishedDate, format) {
    super(title, author, publishedDate);
    this.format = format;
  }
}


const book = new Book("The Catcher in the Rye", "J.D. Salinger", "1951");
const eBook = new EBook("The Catcher in the Rye", "J.D. Salinger", "1951", "PDF");


console.log(book);
console.log(eBook);