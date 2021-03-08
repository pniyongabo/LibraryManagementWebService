import React, { Component } from "react";
import "./users.css";

import book_logo from "../assets/book_logo_black.png";
import book_logo2 from "../assets/logo2.png";
import Sidebar from "./sidebar";
export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: "",
      name: "",
      email: "",
      isbn: "",
      responseToPost: "",
    };
  }
  create_form = () => {
    return (
      <div>
        <form
          className="bg-light border rounded w-50 mx-auto mt-5 p-3"
          action="/api/users/submit"
          method="post"
          encType="text/html"
        >
          <h2 className="mt-2 mb-4">Checkout Form</h2>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="isbn">ISBN *</label>
            <input
              type="text"
              className="form-control"
              id="isbn"
              name="isbn"
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="date">Checkout Date *</label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              required
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkbox"
              name="checkbox"
            />
            <label
              className="form-check-label"
              htmlFor="checkbox"
              id="newsletter"
            >
              Sign up for the newsletter
            </label>
          </div>
          <br />
          <div className="btn-group btn-block">
            <input
              type="submit"
              className="btn btn-primary mr-1 rounded-sm"
              value="Submit"
            />
            <input
              type="reset"
              className="btn btn-secondary rounded-sm"
              value="Reset"
            />
          </div>
        </form>
      </div>
    );
  };

  render() {
    return (
      <div className="title">
        <div className="jumbotron">
          <img
            className="d-inline-block img-fluid logo"
            src={book_logo2}
            alt="logo"
            height="auto"
            width="13%"
          />
          <h1 className="d-inline-block display-2 title_text">Users Page</h1>
          <div>{this.create_form()}</div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}
