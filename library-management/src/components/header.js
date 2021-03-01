import React, { Component } from "react";
import "./header.css";

import book_logo from "../assets/book_logo_black.png";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="title">
        <div className="jumbotron">
          <img
            className="d-inline-block img-fluid logo"
            src={book_logo}
            alt="logo"
            height="auto"
            width="13%"
          />
          <h1 className="d-inline-block display-2 title_text">
            Library Management Web Service
          </h1>
        </div>
      </div>
    );
  }
}
