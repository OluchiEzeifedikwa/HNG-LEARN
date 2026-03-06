import express from "express";
import {
  getHome,
  getAddBook,
  addBook,
  borrowBook,
  returnBook
} from "../controllers/libraryController.js";

const router = express.Router();

router.get("/", getHome);
router.get("/add", getAddBook);
router.post("/add", addBook);
router.post("/borrow/:id", borrowBook);
router.post("/return/:id", returnBook);

export default router;