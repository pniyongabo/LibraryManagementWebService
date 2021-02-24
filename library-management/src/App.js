import React, { Component } from 'react';
import './App.css';
import Homepage from './components/homepage';

// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    }
  }

  componentDidMount(){
    let loadResponse = async () => {
      await fetch("/api/books/list")
      .then((res) => res.json())
      .then((books_list) => {
          this.setState({ isLoaded: true, data: books_list })
      })
    };
    loadResponse();
  }
  

  render(){
    if(!this.state.isLoaded){
      return (
        <div>
            <h1>
              Loading...
            </h1>
        </div>
      )
    }
    else {
      return (
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => <Homepage all_data={this.state.data}/> }
            />
            
            <Route render={()=> <Redirect to="/" />} />
          </Switch>
        </Router>  
      );
    }
  }
}
