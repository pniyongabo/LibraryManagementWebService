import React, { Component } from "react";
import "./sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar ">
        <div className="row">
          <div className="col-2 menu_icon">☰</div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <a href="/">Home</a>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <a href="/books">Books</a>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <a href="/authors">Authors</a>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <a href="/genres">Genres</a>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-3">
            <a href="/loans">Loans</a>
          </div>
        </div>
      </div>
    );
  }
}
