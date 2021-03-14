import React, { Component } from "react";
import { Figure, Tab, Tabs } from "react-bootstrap";

import Sidebar from "./sidebar";
import Header from "./header";
import Books from "./books";

import "./homepage.css";
// require("dotenv").config();

import Carousel from 'nuka-carousel';
import slide1 from "../assets/banner3.jpg";
import slide2 from "../assets/spring.jpg";
import slide3 from "../assets/newest.jpg";
export default class Homepage extends Component {
    constructor(props){
        super(props)
        this.state = {
            wrapAround: true,
            transitionMode: "fade"
        };
    }
  render() {
    return (
    <div>
      <Header />
        <div style={{width: "70%", height: "40%", margin: "auto"}}>
            <Carousel 
                wrapAround={this.state.wrapAround}
                defaultControlsConfig={{
                    nextButtonText: '>',
                    prevButtonText: '<'
                }}
                transitionMode={this.state.transitionMode}
            >
                <img src={slide1} />
                <img src={slide2} />
                <img src={slide3} />
            </Carousel>
        </div>
      </div>
    );
  }
}
/*
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Books /> 
      </div>
    );
  }
}
*/
