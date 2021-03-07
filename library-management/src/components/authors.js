import React, { Component } from "react";
import "./authors.css";
import { MDBDataTable } from "mdbreact";

import Sidebar from "./sidebar";
import Header from "./header";
export default class Authors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: {},
      isLoaded: false,
      names: [],
    };
  }

  componentDidMount() {
    this.getAllAuthors()
      .then((res1) => {
        this.get_isbn(res1.books)
          .then((res3) => {
            this.load_data1(res3).then((res4) => {
              let uniqeArray = [...new Set(res4)];
              this.setState({
                names: uniqeArray,
              });
            });
            var urlArray = [];
            if (res3.length > 0) {
              res3.map((data) => {
                urlArray.push(data);
              });
            }
            return urlArray;
          })
          .then((res4) => {
            return Promise.all(
              res4.map((data) => {
                return fetch(data.isbn).then((res) => res.json());
              })
            );
          })
          .then((res) => {
            console.log(res);
            var objArray = res;
            return objArray;
          })
          .then((res) => {
            var authorURL = [];
            res.map((data) => {
              authorURL.push(data.authors);
            });
            return authorURL;
          })
          .then((res) => {
            this.load_data(res).then((res4) => {
              this.setState({
                authors: res4,
                isLoaded: true,
              });
            });
          });
      })

      .catch((error) => console.log(error));
  }

  getAllAuthors = async () => {
    const response = await fetch("/api/authors/list", {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  getAuthors = async (isbn) => {
    const response = await fetch(isbn, {
      method: "GET",
    });
    const body = response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  goToAuthorPage = (id) => {
    window.location.assign(id);
  };
  get_isbn = async (rawData) => {
    const isbnData = rawData.map((item, i) => {
      var currentRow = {};
      currentRow["name"] = item.author;
      currentRow["isbn"] = `https://openlibrary.org/isbn/${item.isbn}.json`;

      return currentRow;
    });

    return isbnData;
  };

  load_data1 = async (rawData) => {
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      currentRow["name"] = item.name;
      return currentRow;
    });

    return dataRows;
  };
  load_data = async (rawData) => {
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      currentRow["name"] = this.state.names[i].name;
      if (item) {
        currentRow["link"] = item[0].key;
        currentRow["clickEvent"] = () => this.goToAuthorPage(item[0].key);
      } else {
        currentRow["link"] = "";
      }

      return currentRow;
    });

    const dataColumns = [
      {
        label: "Author Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Link",
        field: "link",
        sort: "asc",
      },
    ];

    const authorsData = {
      columns: dataColumns,
      rows: dataRows,
    };

    return authorsData;
  };
  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
          <h1>Loading authors data ...</h1>
        </div>
      );
    }
    return (
      <div className="align-center">
        <Header />
        <h1>Authors Page</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around">
            <MDBDataTable
              striped
              bordered
              responsive
              data={this.state.authors}
            />
          </div>
        </div>

        <Sidebar />
      </div>
    );
  }
}
