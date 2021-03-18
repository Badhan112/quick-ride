import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/Urban Riders.png';
import './TopNavigationBar.css';
import { Link } from "react-router-dom";

const TopNavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"> <Image src={logo} className="logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home" className="navBar-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination" className="navBar-link">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog" className="navBar-link">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contact" className="navBar-link">Contact</Nav.Link>
                        <Button as={Link} to="/login" variant="danger" className="navBar-link">Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default TopNavigationBar;