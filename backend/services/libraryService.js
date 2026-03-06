// backend/services/libraryService.js
import Library from "../models/Library.js";

// Create a single Library instance (singleton)
const library = new Library();

// Get all books
export const getAllBooks = () => {
  return library.getAllBooks();
};

// Add a new book
export const addNewBook = (title, author) => {
  if (!title || !author) {
    throw new Error("Title and Author are required");
  }
  library.addBook(title, author);
};

// Borrow an existing book
export const borrowExistingBook = (id) => {
  const success = library.borrowBook(id);
  if (!success) {
    throw new Error("Book is already borrowed or does not exist");
  }
};

// Return an existing book
export const returnExistingBook = (id) => {
  const success = library.returnBook(id);
  if (!success) {
    throw new Error("Book was not borrowed or does not exist");
  }
};