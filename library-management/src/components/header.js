import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
export default class Sidebar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
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