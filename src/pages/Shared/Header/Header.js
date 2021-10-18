import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import "./Header.css"
const Header = () => {
    return (
        <Navbar className="navbar" bg="light" expand="lg" sticky="top">
            <Container>
                {/* <Navbar.Brand href="#">Doctor Lab</Navbar.Brand> */}
                <HashLink className="logo" to="/home#home">Doctor Lab</HashLink>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto me-5 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link> */}

                        <HashLink className="nav-menu" to="/home#home">Home</HashLink>
                        <HashLink className="nav-menu" to="/about#about">About</HashLink>
                        <HashLink className="nav-menu" to="/home#services">Services</HashLink>
                        <HashLink className="nav-menu" to="/contact#contact">Contact</HashLink>
                    </Nav>
                    <Link to='/login'><Button className="me-3" variant="outline-light">Login</Button></Link>
                    <Button variant="outline-light">Logout</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;