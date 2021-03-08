import React, { Component } from "react";
import { MDBataTable } from 'mdbreact';
import "./categories.css";
import Header from "./header"

import book_logo from "../assets/book_logo_black.png";
import book_logo2 from "../assets/logo2.png";
import "mdbreact/dist/css/mdb.css";

import Sidebar from "./sidebar";
import { MDBDataTable } from "mdbreact";
export default class Genres extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            categories: {}
        };
    }
    componentDidMount(){
        this.getAllCategories()
            .then(res1 => this.load_data(res1)
                .then(res3 => this.setState({
                    categories: res3,
                    isLoaded: true
                }))
            )
            .catch(err => console.log(err));
    }
    getAllCategories = async () => {
      const response = await fetch('/api/books/completelist');
      const body = await response.json();
      if (response.status !== 200){
          return {};
      }
      return body;
    }
    load_data = async(theData) => {
        console.log(theData.length);
        const dataRows = theData.map((item, i) => {
            var currentRow = {};

            currentRow["categories"] = item.categories.join(", ");
            //currentRow["clickEvent"] = () => this.goToCategoryPage(item.categories);
            
            return currentRow; 
        });
        const dataColumns = [
            {
                label: "Categories",
                field: "categories",
                sort: "asc"
            }
        ]
        const booksData = {
            columns: dataColumns,
            rows: dataRows
        };
        
        return booksData;
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
            <h1 className="horizontal-center">List of Categories</h1>
            <div className='container'>
                <div className="d-flex flex-wrap justify-content-around">
                    <MDBDataTable
                        striped
                        bordered
                        responsive
                        data={this.state.categories}
                    />
                </div>
            </div>
            <Sidebar />
        </div>
      );
  }
}
