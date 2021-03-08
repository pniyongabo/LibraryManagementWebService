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
      .then((res1) => {
        console.log(res1);
        this.setState({
          authorDetails: res1,
          authorDetailsLoaded: true,
        });
      })
      .catch((err) => console.log(err));
  }

  getAuthorDetails = async (id) => {
    const response = await fetch(`https://openlibrary.org/authors/${id}.json`, {
      method: "GET",
    });

    const body = await response.json();

    if (response.status !== 200) {
      return {};
    }

    return body;
  };

  load_data = (id) => {
    var bio = "No information";
    const authorImage = `http://covers.openlibrary.org/a/olid/${id}-M.jpg`;
    const authorImageALT = "Image of Author " + this.state.authorDetails.name;
    if (this.state.authorDetails.bio) {
      bio = this.state.authorDetails.bio.value;
    }
    return (
      <div>
        <div>
          <img src={authorImage} alt={authorImageALT} />
        </div>
        <div className="author-info">
          <h1>{this.state.authorDetails.name}</h1>
          <p>
            {this.state.authorDetails.birth_date -
              this.state.authorDetails.death_date}
          </p>
          <p className="bio">{bio}</p>
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
        <div className="mx-auto">
          {this.load_data(this.props.match.params.id)}
          <Sidebar />
        </div>
      </div>
    );
  }
}
