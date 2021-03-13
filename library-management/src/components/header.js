import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/Navbar_logo2.svg"
export default class Sidebar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
                <img
                    alt="Library logo"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Library Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/books">Books</Nav.Link>
                <Nav.Link href="/authors">Authors</Nav.Link>
                <Nav.Link href="/categories">Categories</Nav.Link>
                <Nav.Link href="/loans">Loans</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}