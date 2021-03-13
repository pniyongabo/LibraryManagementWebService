import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import {Link} from 'react-router-dom';

import "./categories.css";

import book_logo from "../assets/book_logo_black.png";
import book_logo2 from "../assets/logo2.png";
import book_logo3 from "../assets/book_logo_white.png";

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
                <Link to={{
                  pathname: '/category/' + item,
                  state: {
                    data: this.state.categories[item]
                  }
                }}
                className= 'team_link'
                > 
                <div className='team_choice '>
                  <img className='img-fluid team_logo' src={book_logo3} alt={(item)+' logo'} width={130} height='auto' />
                  <div className='team_text'>
                  {item}
                  </div>
                </div>
                </Link>
                
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
                <div className='container'>
                  <div className='d-flex flex-wrap justify-content-around'>
                    {this.load_data()}
                  </div>
                </div>
              </div>
        </div>
      );
  }
}
