import React, { Component } from "react";

import Header from "./header";
import Sidebar from "./sidebar";

import "./loans.css";

import book_background from "../assets/book_bkg.png";

export default class Loans extends Component {
  render() {
    return (
      <div>
        <Header />    
        <div class="header-wrapper">
            <img class="header-img" src={book_background} alt='book background image' />      
        </div>
        <Sidebar />
      </div>
    );
  }
}
