# HNG-LEARN
# Library App Backend

A simple Node.js backend for managing a library system where users can **add, borrow, and return books**. Built with **Express.js**, **EJS**, and **Docker** support.  

---

## Features

- Add new books to the library.
- Borrow and return books.
- Render views using **EJS**.
- Configurable port via `.env`.
- Docker-ready for easy deployment.

---

## Tech Stack

- **Node.js** (v18)
- **Express.js**
- **EJS**
- **dotenv**
- **Docker**

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) (optional, for containerized run)

---

### Install Dependencies

```bash
npm install

PORT=3000

# Start the server
npm start

## Updates

### Service Layer & Controller Refactor
- Added `libraryService.js` for business logic.
- Updated `libraryController.js` to use service methods.
- Controllers now focus on request/response; services handle logic.