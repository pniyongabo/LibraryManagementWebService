import React, { Component } from "react";
import "./App.css";
import Homepage from "./components/homepage";
import Books from "./components/books";
import Book from "./components/book";
import Authors from "./components/authors";
import Categories from "./components/categories";
import Category from "./components/category";
import Loans from "./components/loans";
import Author from "./components/author";
import Users from "./components/users";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function BookList(props) {
  let element = props.data.map((item, index) => {
    return <div key={index}>{item.title}</div>;
  });
  return element;
}
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      data: {},
    };
  }

  componentDidMount() {
    let loadResponse = async () => {
      await fetch("/api/books/list")
        .then((res) => res.json())
        .then((data) => {
          this.setState({ books: data.books, isLoaded: true });
        })
        .catch((error) => console.log(error));
    };
    loadResponse();
  }

  render() {
    const { books, isLoaded } = this.state;
    if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route path="/books">
              <Books />
            </Route>
            <Route
              path="/book/:isbn"
              exact
              render={(props) => <Book {...props} />}
            />
            <Route path="/authors" exact render={(props) => <Authors />} />
            <Route
              path="/authors/:id"
              exact
              render={(props) => <Author {...props} />}
            />
            <Route path="/categories">
              <Categories></Categories>
            </Route>
            <Route
              path="/category/:category"
              exact
              render={(props) => (
                <Category {...props} all_data={this.state.data}/>
              )}
            />
            <Route path="/loans">
              <Loans />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>

            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Router>
      );
    }
  }
}
