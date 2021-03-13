const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
cors = require("cors");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;
const mongoose = require("mongoose");

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

var helperDataController = require("./helperDataController");

app.use(express.static(path.join(__dirname, "/build")));

app.get("/*", (req, res, next) => {
  if (!req.path.includes("api"))
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  else next();
});

app.get("/api/authors/list", helperDataController.getListOfAuthors);
app.get("/api/books/list", helperDataController.getListOfBooks);
app.get("/api/books/completelist", helperDataController.getCompleteListOfBooks);
app.get("/api/books/mappings", helperDataController.getBooksMappings);
app.get("/api/categories/mappings", helperDataController.getCategoriesMappings);

// app.post("/api/users/submit", (req, res) => {
//   res.write(`Name: ${req.body.name}\n`);
//   res.write(`Email: ${req.body.email}\n`);
//   res.write(`ISBN: ${req.body.isbn}\n`);
//   res.write(`Checkout Date: ${req.body.date}\n`);
//   if (req.body.checkbox) {
//     res.write(`Newsletter: Yes, I would like to sign up for the newsletter.\n`);
//   } else {
//     res.write(`Newsletter: No, thank you.\n`);
//   }
//   res.end();
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

mongoose
  .connect("mongodb://localhost:27017/userData", { useNewUrlParser: true })
  .catch((e) => {
    console.error("Connection error", e.message);
  });
const db = mongoose.connection;
module.exports = db;
var userData = new mongoose.Schema({
  name: String,
  email: String,
  isbn: String,
  checkout_date: Date,
  newsletter: Boolean,
});
var User = mongoose.model("User", userData);
app.post("/api/users/submit", (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send("item saved to database");
    })
    .catch((err) => {
      res.status(400).send("unable to save to database");
    });
});
