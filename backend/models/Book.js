export default class Book {
    constructor(id, title, author) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.isBorrowed = false;
    }
  
    borrow() {
      if (!this.isBorrowed) {
        this.isBorrowed = true;
      }
    }
  
    returnBook() {
      this.isBorrowed = false;
    }
  }