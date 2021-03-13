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
var userData = new mongoose.Schema({
  name: String,
  email: String,
  isbn: String,
  checkout_date: Date,
  newsletter: Boolean,
});
var userModel = mongoose.model("userData", userData);
module.exports = mongoose.model("userModel", userData);

getUserData = (req, res) => {
  userModel
    .find({}, (err, movies) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }
      if (!movies.length) {
        return res
          .status(404)
          .json({ success: false, error: `Movie not found` });
      }
      return res.status(200).json({ success: true, data: movies });
    })
    .catch((err) => console.log(err));
};
app.get("/api/checkoutlist", getUserData);

createUser = (req, res) => {
  var check = false;
  if (req.body.checkbox) {
    check = true;
  }
  var userDetails = new userModel({
    name: req.body.name,
    email: req.body.email,
    isbn: req.body.isbn,
    checkout_date: req.body.date,
    newsletter: check,
  });
  userDetails
    .save()
    .then(() => {
      res.redirect("/checkoutlist");
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "User not created!",
      });
    });
};

app.post("/api/users/submit", createUser);
