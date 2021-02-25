import React, { Component } from "react";
import "./loans.css";

import book_logo from "../assets/book_logo_black.png";
import Sidebar from "./sidebar";
export default class Loans extends Component {
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
          <h1 className="d-inline-block display-2 title_text">Loans Page</h1>
          <div className="col-2">
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
