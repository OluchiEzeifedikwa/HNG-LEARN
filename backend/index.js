// // Book Class
// class Book {
//     constructor(title, author) {
//       this.id = Date.now().toString(); 
//       this.title = title;
//       this.author = author;
//       this.isBorrowed = false;
//     }
  
//     borrow() {
//       this.isBorrowed = true;
//     }
  
//     returnBook() {
//       this.isBorrowed = false;
//     }
//   }
  
  
//   // Library Class
//   class Library {
//     constructor() {
//       this.books = [];
//     }
  
//     addBook(title, author) {
//       const newBook = new Book(title, author);
//       this.books.push(newBook);
//     }
  
//     borrowBook(id) {
//       const book = this.books.find(book => book.id === id);
//       if (book) book.borrow();
//     }
  
//     returnBook(id) {
//       const book = this.books.find(book => book.id === id);
//       if (book) book.returnBook();
//     }

//     searchByTitle(title) {
//         return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
//     }

//   }
  
  
//   // Create Library Object
//   const library = new Library();
  
  
  
//   //  CONTROLLER + DOM
  
  
//   // Select Elements
//   const titleInput = document.getElementById("title");
//   const authorInput = document.getElementById("author");
//   const addBtn = document.getElementById("addBtn");
//   const bookList = document.getElementById("bookList");
  
  
//   // Add Book Event
//   addBtn.addEventListener("click", () => {
//     const title = titleInput.value.trim();
//     const author = authorInput.value.trim();
  
//     if (!title || !author) return;
  
//     library.addBook(title, author);
//     renderBooks();
  
//     titleInput.value = "";
//     authorInput.value = "";
//   });
  
  
//   // Render Books
//   function renderBooks() {
//     bookList.innerHTML = "";
  
//     library.books.forEach(book => {
//       const li = document.createElement("li");
  
//       li.innerHTML = `
//         <strong>${book.title}</strong> by ${book.author}
//         - ${book.isBorrowed ? "Borrowed" : "Available"}
//         <button data-id="${book.id}" class="borrow-btn">Borrow</button>
//         <button data-id="${book.id}" class="return-btn">Return</button>
//       `;
  
//       bookList.appendChild(li);
//     });
//   }
  
  
//   // Event Delegation
//   bookList.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
  
//     if (e.target.classList.contains("borrow-btn")) {
//       library.borrowBook(id);
//       renderBooks();
//     }
  
//     if (e.target.classList.contains("return-btn")) {
//       library.returnBook(id);
//       renderBooks();
//     }
//   });