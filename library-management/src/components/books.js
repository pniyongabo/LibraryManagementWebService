import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import Sidebar from './sidebar';
import Header from './header';
import './books.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// import book_logo from "../assets/book_logo_black.png";

export default class Books extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      books: {}
    }
  }
  
  componentDidMount() {
    this.getCompleteListOfBooks()
      .then(res1 => this.load_data(res1)
        .then(res3 => this.setState({
          books: res3,
          isLoaded: true
        }))
      )
      .catch(err => console.log(err));
  }
  
  getCompleteListOfBooks = async () => {
      const response = await fetch('/api/books/completelist');
        
        const body = await response.json();
        
        if (response.status !== 200) {
          return {}; 
        }
        
        return body;

  }
  
  goToBookPage = (isbn) => {
    window.location.assign('/book/' + isbn);
  }
  
  load_data = async (rawData) => {
  
    
    console.log(rawData.length)
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      
      var theLink = `http://covers.openlibrary.org/b/isbn/${item.isbn}-S.jpg?default=false`
      currentRow["cover"] = <img src={theLink}/>

      currentRow["title"] = item.title;
      currentRow["authors"] = item.authors.join(", ");
      var publishedObject = item.hasOwnProperty("publishedDate") ? item.publishedDate : {};
      // currentRow["published"] = publishedObject["$date"];
      currentRow["published"] = publishedObject !== {} ? new Date(publishedObject.$date).toLocaleString() : "";
      currentRow["categories"] = item.categories.join(", ");
      currentRow["pages"] = item.pageCount;
      currentRow["isbn"] = item.isbn;
      
      currentRow["clickEvent"] = () => this.goToBookPage(item.isbn);
      
      return currentRow; 
    });
    
    const dataColumns = [
            {
              label: 'Cover',
              field: 'cover',
              sort: 'asc'
            },
            {
              label: 'Title',
              field: 'title',
              sort: 'asc'
            },
            {
              label: 'Authors',
              field: 'authors',
              sort: 'asc'
            },
            {
              label: 'Pub Date',
              field: 'published',
              sort: 'asc'
            },
            {
              label: 'Categories',
              field: 'categories',
              sort: 'asc'
            },
            {
              label: 'Pages',
              field: 'pages',
              sort: 'asc'
            },
            {
              label: 'ISBN',
              field: 'isbn',
              sort: 'asc'
            }
          ];
  
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
              Loading players data ...
            </h1>
        </div>
      )
    }

    return (
      <div className="align-center">
          <Header />
          <h1 className="horizontal-center">
            List of Books
          </h1>
          <div className='container'>
            <div className='d-flex flex-wrap justify-content-around'>
              <MDBDataTable
                 striped
                 bordered
                 responsive
                 data={this.state.books}
              />
            </div>
          </div>

          <Sidebar />
      </div>
    );
  }

}
