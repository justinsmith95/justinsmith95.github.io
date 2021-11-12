import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
export default function BlogHeader(props) {





    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link to="/Contact" as={NavLink}>Justin Smith</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                                <Nav.Link to="/Blog" as={NavLink} activeClassName="active">Blog</Nav.Link>
                            <>
                                <Nav.Link to="/Projects" as={NavLink} activeClassName="active">Projects</Nav.Link>
                            </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};