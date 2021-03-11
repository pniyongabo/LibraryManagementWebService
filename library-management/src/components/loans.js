import React, { Component } from "react";

import Header from "./header";
import Sidebar from "./sidebar";

import "./loans.css";

export default class Loans extends Component {
  render() {
    return (
      <div>
        <Header />    
        <Sidebar />
      </div>
    );
  }
}
