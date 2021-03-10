import React, { Component } from "react";
import { MDBataTable } from 'mdbreact';
import "./categories.css";
import Header from "./header"

import book_logo from "../assets/book_logo_black.png";
import book_logo2 from "../assets/logo2.png";
// import "mdbreact/dist/css/mdb.css";

import Sidebar from "./sidebar";
// import { MDBDataTable } from "mdbreact";
export default class Categories extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            categories: {}
        };
    }
    componentDidMount(){  
        this.getAllCategories()
        .then(res1 => this.setState({ 
          categories: res1,
          isLoaded: true
        }))
        .catch(err => console.log(err));
    }
    
    getAllCategories = async () => {
      const response = await fetch('/api/categories/mappings');
      const body = await response.json();
      if (response.status !== 200){
          return {};
      }
      console.log(body);
      return body;
    }
    
    load_data = () => {
      var arr = [];
      Object.keys(this.state.categories).forEach(function(key) {
        arr.push(key);
      });
      
      return (
        arr.map((item, index) => {
              return (
                <div key={index}>
                  <h5>{item}</h5>
                 {
                  this.state.categories[item].map((subitem, i) => {
                    return (
                       <ul><li>{subitem}</li></ul>
                    )
                  })
                 }
                </div>
              )
            }
          )
      )
    }
    


  render() {
      if(!this.state.isLoaded){
          return (
              <div>
                  <h1>
                      Loading categories...
                  </h1>
              </div>
          )
      }
      return (
        <div className="align-center">
            <Header />
            <h1>List of Categories</h1>
              <div>
              {this.load_data()}
              </div>
            <Sidebar />
        </div>
      );
  }
}
