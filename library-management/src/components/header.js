import React, { Component } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/Navbar_logo2.svg"
import "./header.css"
import blogo from "../assets/books2.png"
import alogo from "../assets/authors.png"
import clogo from "../assets/category.png"
import llogo from "../assets/loan.png"
import ulogo from "../assets/user.png"

export default class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark" className="sticky_nav">
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
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/books" className="textStyle">
                            <img
                                alt="book icon"
                                src={blogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Books
                        </Nav.Link>
                        <Nav.Link href="/authors" className="textStyle">
                            <img
                                alt="authors icon"
                                src={alogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Authors</Nav.Link>
                        <Nav.Link href="/categories" className="textStyle">
                            <img
                                alt="categories icon"
                                src={clogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Categories</Nav.Link>
                        <Nav.Link href="/loans" className="textStyle">
                            <img
                                alt="loan icon"
                                src={llogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Loans</Nav.Link>
                        <Nav.Link href="/users" className="textStyle">
                            <img
                                alt="book icon"
                                src={ulogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-middle"
                            />{' '}
                            Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}