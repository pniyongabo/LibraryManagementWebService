const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
cors = require("cors");
const parser = require("body-parser");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

var helperDataController = require("./helperDataController");

app.use(express.static(path.join(__dirname, '/build')));

app.get('/*', (req, res, next) => {
    if (!req.path.includes('api'))
        res.sendFile(path.join(__dirname, '/build', 'index.html'));
    else next();
});

app.get("/api/authors/list", helperDataController.getListOfAuthors);
app.get("/api/books/list", helperDataController.getListOfBooks);
app.get("/api/books/completelist", helperDataController.getCompleteListOfBooks);
app.get("/api/books/mappings", helperDataController.getBooksMappings);
app.get("/api/categories/mappings", helperDataController.getCategoriesMappings);

app.post("/api/users/submit", (req, res) => {
  res.write(`Name: ${req.body.name}\n`);
  res.write(`Email: ${req.body.email}\n`);
  res.write(`ISBN: ${req.body.isbn}\n`);
  res.write(`Checkout Date: ${req.body.date}\n`);
  if (req.body.checkbox) {
    res.write(`Newsletter: Yes, I would like to sign up for the newsletter.\n`);
  } else {
    res.write(`Newsletter: No, thank you.\n`);
  }
  res.end();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
