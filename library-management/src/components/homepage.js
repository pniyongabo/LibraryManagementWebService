import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

import Sidebar from "./sidebar";
import Header from "./header";
import Books from "./books";

import "./homepage.css";

// require("dotenv").config();

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Books />
      </div>
    );
  }
}
