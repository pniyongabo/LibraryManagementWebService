const path = require("path");
const fs = require("fs");

const basePathToData = path.join(__dirname, "helperdata");

const getJsonData = function (basePathToData, filename) {
  var filename = path.join(basePathToData, filename);
  return JSON.parse(fs.readFileSync(filename, "utf-8"));
};

const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj["title"]);
    return objectsByKeyValue;
  }, {});

exports.getListOfBooks = function (request, response) {
  var data = getJsonData(basePathToData, "book_list_example_one.json");
  return response.send(data);
};

exports.getListOfAuthors = function (request, response) {
  var data = getJsonData(basePathToData, "books.json");
  return response.send(data);
};

exports.getCompleteListOfBooks = function (request, response) {
  var data = getJsonData(basePathToData, "books.json");
  return response.send(data);
};

exports.getBooksMappings = function (request, response) {
  var data = getJsonData(basePathToData, "books.json");
  var books = data.reduce(
    (map, book) => ((map[book.isbn] = book.longDescription), map),
    {}
  );
  return response.send(books);
};

exports.getCategoriesMappings = function (request, response) {
  var data = getJsonData(basePathToData, "books.json");
  const groupByBrand = groupBy('categories');
  return response.send(groupByBrand(data));
};
