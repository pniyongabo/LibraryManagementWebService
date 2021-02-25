import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";

import Sidebar from "./sidebar";
import Header from "./header";

import "./homepage.css";

// require("dotenv").config();

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="col-2">
          <Sidebar />
        </div>
      </div>
    );
  }
}
