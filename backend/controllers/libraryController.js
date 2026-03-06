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
  const { title, author } = req.body;
  try {
    addNewBook(title, author);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Handle borrowing a book
export const borrowBook = (req, res) => {
  try {
    borrowExistingBook(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

// Handle returning a book
export const returnBook = (req, res) => {
  try {
    returnExistingBook(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.status(400).send(err.message);
  }
};