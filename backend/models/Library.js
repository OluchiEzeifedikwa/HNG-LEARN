import Book from "./Book.js";

export default class Library {
  constructor() {
    this.books = [];
  }

  addBook(title, author) {
    const id = this.books.length + 1;
    const newBook = new Book(id, title, author);
    this.books.push(newBook);
  }

  getAllBooks() {
    return this.books;
  }

  findBookById(id) {
    return this.books.find(book => book.id === parseInt(id));
  }

  borrowBook(id) {
    const book = this.findBookById(id);
    if (book && !book.isBorrowed) {
      book.borrow();
    }
  }

  returnBook(id) {
    const book = this.findBookById(id);
    if (book && book.isBorrowed) {
      book.returnBook();
    }
  }
}