import Library from "../models/Library.js";

const library = new Library();

export const getHome = (req, res) => {
  const books = library.getAllBooks();
  res.render("index", { books });
};

export const getAddBook = (req, res) => {
  res.render("add-book");
};

export const addBook = (req, res) => {
  const { title, author } = req.body;
  library.addBook(title, author);
  res.redirect("/");
};

export const borrowBook = (req, res) => {
  library.borrowBook(req.params.id);
  res.redirect("/");
};

export const returnBook = (req, res) => {
  library.returnBook(req.params.id);
  res.redirect("/");
};