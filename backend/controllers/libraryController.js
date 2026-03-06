// backend/controllers/libraryController.js
import * as libraryService from "../services/libraryService.js";

export const getHome = (req, res) => {
  try {
    const books = libraryService.getAllBooks();
    res.render("index", { books });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getAddBook = (req, res) => {
  res.render("add-book");
};

export const addBook = (req, res) => {
  try {
    const { title, author } = req.body;
    libraryService.addNewBook(title, author);
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const borrowBook = (req, res) => {
  try {
    libraryService.borrowExistingBook(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const returnBook = (req, res) => {
  try {
    libraryService.returnExistingBook(req.params.id);
    res.redirect("/");
  } catch (error) {
    res.status(400).send(error.message);
  }
};