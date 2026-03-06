// backend/services/libraryService.js
import Library from "../models/Library.js";

const library = new Library();

export const getAllBooks = () => {
  return library.getAllBooks();
};

export const addNewBook = (title, author) => {
  if (!title || !author) {
    throw new Error("Title and Author are required");
  }
  library.addBook(title, author);
};

export const borrowExistingBook = (bookId) => {
  const success = library.borrowBook(bookId);
  if (!success) {
    throw new Error("Book is already borrowed or does not exist");
  }
};

export const returnExistingBook = (bookId) => {
  const success = library.returnBook(bookId);
  if (!success) {
    throw new Error("Book was not borrowed or does not exist");
  }
};