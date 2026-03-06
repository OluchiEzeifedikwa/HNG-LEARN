// backend/controllers/libraryController.js
import {
  getAllBooks,
  addNewBook,
  borrowExistingBook,
  returnExistingBook
} from "../services/libraryService.js";

// Render home page with all books
export const getHome = (req, res) => {
  const books = getAllBooks();
  res.render("index", { books });
};

// Render the add-book form
export const getAddBook = (req, res) => {
  res.render("add-book");
};

// Handle adding a new book
export const addBook = (req, res) => {
  addNewBook(req.body.title, req.body.author);
  res.redirect("/");
};

// Handle borrowing a book
export const borrowBook = (req, res) => {
  borrowExistingBook(req.params.id);
  res.redirect("/");
};

// Handle returning a book
export const returnBook = (req, res) => {
  returnExistingBook(req.params.id);
  res.redirect("/");
};