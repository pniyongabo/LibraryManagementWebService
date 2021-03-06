const path = require("path");
const fs = require("fs");

const basePathToData = path.join(__dirname, "helperdata");

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

exports.getListOfBooks = function (request, response) {
  var data = getJsonData(basePathToData, "book_list_example_one.json");
  return response.send(data);
};

<<<<<<< HEAD
exports.getListOfAuthors = function (request, response) {
  var data = getJsonData(basePathToData, "book_list_example_two.json");
=======
exports.getCompleteListOfBooks = function (request, response) {
  var data = getJsonData(basePathToData, 'book_list_example_two.json');
>>>>>>> 1bef0d11b24ca5ba58e87bf21bfd477d249926e7
  return response.send(data);
};
