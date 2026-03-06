// backend/services/libraryService.js
import Library from "../models/Library.js";

// Create a single Library instance (singleton)
const library = new Library();

// Get all books
export const getAllBooks = () => {
  try {
    return library.getAllBooks();
  } catch (error) {
    console.error("Failed to get books:", error.message);
    return []; // return empty array if error occurs
  }
};

// Add a new book
export const addNewBook = (title, author) => {
  try {
    if (!title || !author) {
      throw new Error("Title and Author are required");
    }
    library.addBook(title, author);
    return { success: true, message: "Book added successfully" };
  } catch (error) {
    console.error("Failed to add book:", error.message);
    return { success: false, message: error.message };
  }
};

// Borrow an existing book
export const borrowExistingBook = (id) => {
  try {
    const success = library.borrowBook(id);
    if (!success) {
      throw new Error("Book is already borrowed or does not exist");
    }
    return { success: true, message: "Book borrowed successfully" };
  } catch (error) {
    console.error("Failed to borrow book:", error.message);
    return { success: false, message: error.message };
  }
};

// Return an existing book
export const returnExistingBook = (id) => {
  try {
    const success = library.returnBook(id);
    if (!success) {
      throw new Error("Book was not borrowed or does not exist");
    }
    return { success: true, message: "Book returned successfully" };
  } catch (error) {
    console.error("Failed to return book:", error.message);
    return { success: false, message: error.message };
  }
};