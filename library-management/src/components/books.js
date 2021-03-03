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
  
  goToBookPage = (id) => {
    window.location.assign('/books/bookId/'+id);
  }
  
  load_data = async (rawData) => {
  
    
    console.log(rawData.length)
    const dataRows = rawData.map((item, i) => {
      var currentRow = {};
      
      // add book cover
      
      currentRow["title"] = item.title;
      currentRow["author"] = item.author;
      currentRow["published"] = item.published;
      currentRow["publisher"] = item.publisher;
      currentRow["pages"] = item.pages;
      currentRow["isbn"] = item.isbn;
      currentRow["isbn13"] = item.isbn13;
      
      currentRow["clickEvent"] = () => this.goToPlayerPage(item.goodreadsid);
      
      return currentRow; 
    });
    
    const dataColumns = [
            {
              label: 'Title',
              field: 'title',
              sort: 'asc'
            },
            {
              label: 'Author',
              field: 'author',
              sort: 'asc'
            },
            {
              label: 'Pub Date',
              field: 'published',
              sort: 'asc'
            },
            {
              label: 'Publisher',
              field: 'publisher',
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
            },
            {
              label: 'ISBN13',
              field: 'isbn13',
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
