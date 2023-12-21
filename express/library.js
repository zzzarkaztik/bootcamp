const ex = require("express");
const fs = require("fs");
const bk = require("./books");

const cors = require("cors");

const app = ex();

app.use(ex.json());
app.use(cors());

const b = bk.books;

// API
app.get("/api/books", (req, res) => {
  res.send(b);
});

app.get("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i].id == Number(req.params.id)) {
      book = b[i];
      break;
    }
  }
  if (book) {
    res.send(book);
  } else {
    let err = "No Book Found";
    res.status(404);
    res.send("ERROR: " + err);
    console.error("ERROR: " + err);
  }
});

app.get("/api/books/genre/:genre", (req, res) => {
  let books = [];
  for (let i = 0; i < b.length; i++) {
    let genre = b[i].genre.toLocaleLowerCase();
    if (genre == req.params.genre.toLocaleLowerCase()) {
      books.push(b[i]);
    }
  }

  if (books.length > 0) {
    res.send(books);
  } else {
    let err = "No Book Found";
    res.status(404);
    res.send("ERROR: " + err);
    console.error("ERROR: " + err);
  }
});

app.put("/api/books", (req, res) => {
  let new_book = {
    id: b.length,
    title: req.body.title,
    genre: req.body.genre,
  };
  b.push(new_book);
  res.send(new_book);
});

app.put("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i].id == Number(req.params.id)) {
      book = b[i];
      break;
    }
  }
  if (book) {
    if (req.body.title) {
      book.title = req.body.title;
    }

    if (req.body.genre) {
      book.genre = req.body.genre;
    }

    console.log(book);
    res.send(book);
  } else {
    let err = "Book not found!";
    res.status(404);
    console.error(err);
    res.send(err);
  }
});

app.delete("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < b.length; i++) {
    if (b[i].id == Number(req.params.id)) {
      book = b[i];
      break;
    }
  }

  if (book) {
    let index = b.indexOf(book);
    console.log(book);
    b[index] = {};
    console.log("An entry has been deleted.");
    res.send("An entry has been deleted.");
  } else {
    let err = "Book not found!";
    res.status(404);
    console.error(err);
    res.send(err);
  }
});
// Main website

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  console.log("Someone accessed /about");
  res.send("About Us!");
});

app.get("/shop", (req, res) => {
  console.log("Someone accessed /shop");
  //   res.send("Shop Page");
  fs.readFile("shop.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

// Server setup
app.listen(3000);
console.log("Starting server at port 3000...");
