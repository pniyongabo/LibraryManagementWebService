import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/Navbar_logo2.svg"
import "./header.css"

export default class Sidebar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/" className="textStyle">
                    <img
                        alt="Library logo"
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-middle"
                    />{' '}
                    Library Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/books" className="textStyle">Books</Nav.Link>
                        <Nav.Link href="/authors" className="textStyle">Authors</Nav.Link>
                        <Nav.Link href="/categories" className="textStyle">Categories</Nav.Link>
                        <Nav.Link href="/loans" className="textStyle">Loans</Nav.Link>
                        <Nav.Link href="/users" className="textStyle">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}