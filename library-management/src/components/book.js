import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';

import './book.css';

export default class Book extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }
  
  componentDidMount() {
    this.getBookDetails(this.props.match.params.isbn)
      .then(res => this.setState({ 
        bookDetails: res,
        isbn: this.props.match.params.isbn,
        isLoaded: true
      }))
    .catch(err => console.log(err));
  }
  
  getBookDetails = async (isbn) => {
      const response = await fetch('/api/books/mappings');
        
        const body = await response.json();
        
        if (response.status !== 200) {
          return ""; 
        }
        
        return body[isbn];

  }
  
  load_data = () => {
    const bookCover = `http://covers.openlibrary.org/b/isbn/${this.state.isbn}-L.jpg?default=false`
    const bookCoverALT = "Book cover of: " + this.state.isbn;
    return(
      // <div>
      //   <div>
      //     <img src={bookCover} alt={bookCoverALT}/>
      //     <p>{this.state.bookDetails}</p>
      //   </div>
      // </div>
      <div class="container">
        <div class="container-a">
            <img class="book-cover" src={bookCover} alt={bookCoverALT}/>
        </div>
        <div class="container-b text-left">
            <p>{this.state.bookDetails}</p>
        </div>
    </div>
       )
  }
    
  render() {
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading book details data ...
            </h1>
        </div>
      )
    }

    return (
      <div>
      <Header />
      <div className="align-center">
          {this.load_data(this.state.data)}
          <Sidebar />
      </div>
      </div>
    );
  }

}