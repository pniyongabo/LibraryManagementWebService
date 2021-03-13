import React, { Component } from "react";

import Header from "./header";
import Sidebar from "./sidebar";

import "./users.css";

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
          <h2 className="mt-2 mb-4 text-center">Users Checkout Form</h2>
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
              Si Sign up for the newsletter
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
      <div>
        <Header />
        <div>{this.create_form()}</div>
      </div>
    );
  }
}
