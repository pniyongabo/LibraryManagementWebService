import React, { Component } from "react";
import Header from "./header";
import Sidebar from "./sidebar";

import "./category.css";

export default class Category extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      categoryBooks: {},
    }
  }
  
  componentDidMount() {
      this.setState({ 
        categoryBooks: this.props.location.state.data,  
        isLoaded: true,
        category: this.props.match.params.category,
      })
  }
  

  
  load_data = () => {
    return(
      <div>
        <div>
           <h1>Category: {this.state.category}</h1>
        </div>
        <ul>
        {this.state.categoryBooks.map((item, index) => {
            return (
              <li>{item}</li>
            )
          })}
        </ul>
      </div>
      )
  }
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading category data ...
            </h1>
        </div>
      )
    }

    return (
        <div>
        <Header />
        <div className='align-center'>
              {this.load_data(this.state.data)}
        </div>
        </div>
    );
  }

}