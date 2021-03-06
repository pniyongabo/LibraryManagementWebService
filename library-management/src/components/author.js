import React, { Component } from "react";
import Sidebar from "./sidebar";
import Header from "./header";

import "./author.css";

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorDetailsLoaded: false,
      authorDetails: {},
    };
  }

  componentDidMount() {
    this.getAuthorDetails(this.props.match.params.id)
      .then((res1) =>
        this.setState({
          authorDetails: res1.api.author[0],
          authorDetailsLoaded: true,
        })
      )
      .catch((err) => console.log(err));
  }

  getAuthorDetails = async (id) => {
    const response = await fetch("https://openlibrary.org/authors/" + id, {
      method: "GET",
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });

    const body = await response.json();

    if (response.status !== 200) {
      return {};
    }

    return body;
  };

  load_data = () => {
    return (
      <div>
        <div className="author-info">
          <h1>{this.state.authorDetails.name}</h1>
          <h6>Birthdate: {this.state.author.year}</h6>
        </div>
      </div>
    );
  };

  render() {
    if (!this.state.authorDetailsLoaded) {
      return (
        <div>
          <h1>Loading author details data ...</h1>
        </div>
      );
    }

    return (
      <div>
        <Header />
        <div className="align-center">
          {this.load_data(this.state.data)}
          <Sidebar />
        </div>
      </div>
    );
  }
}
