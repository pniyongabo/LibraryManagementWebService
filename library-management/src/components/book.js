import React, { Component } from 'react';
import Sidebar from './sidebar';
import Header from './header';

import './book.css';

export default class Book extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      bookDetails: {}
    }
  }
  
  componentDidMount() {
    this.setState({ 
      isbn: this.props.match.params.isbn,
      isLoaded: true
    })  
  }
  
  load_data = () => {
    console.log(this.props);
    console.log(this.state);
    const bookCover = `http://covers.openlibrary.org/b/isbn/${this.state.isbn}-M.jpg?default=false`
    //const bookCover = this.state.bookDetails.thumbnailUrl;
    const bookCoverALT = "Book cover of: " + this.state.bookDetails.title;
    return(
      <div>
        <div>
          <img src={bookCover} alt={bookCoverALT}/>
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