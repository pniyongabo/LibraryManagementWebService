const express = require('express')
const fetch = require('node-fetch');
const path = require('path');
cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());

var helperDataController = require('./helperDataController');

app.get('/', (req, res) => {
  var helloworld = {"Hello": "World"};
  res.send(helloworld)
});

app.get('/api/books/list', helperDataController.getListOfBooks);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
