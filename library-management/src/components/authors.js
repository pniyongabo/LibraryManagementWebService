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
    };
  }

  componentDidMount() {
    this.getAllAuthors()
      .then((res1) =>
        this.load_data(res1.books).then((res3) => {
          this.setState({
            authors: res3,
            isLoaded: true,
          });
          console.log(this.state.authors);
        })
      )
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
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`, {
      method: "GET",
    });
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  goToAuthorPage = (id) => {
    window.location.assign("/authors/" + id);
  };

  load_data = async (rawData) => {
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      currentRow["name"] = item.author;
      this.getAuthors(item.isbn).then((res1) => {
        if (res1.authors) {
          currentRow["link"] = res1.authors[0].key;
        }
      });

      currentRow["clickEvent"] = () => this.goToAuthorPage(item.author);

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
