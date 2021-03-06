import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
export default function BlogHeader(props) {





    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <Nav.Link to="/home" as={NavLink}>Home</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home" as={NavLink} activeClassName="active">Justin Smith, Full-Stack Web Developer</Nav.Link>
                        
                                <Nav.Link to="/Blog" as={NavLink} activeClassName="active">Blog</Nav.Link>
                            <>
                                <Nav.Link to="/Projects" as={NavLink} activeClassName="active">Projects</Nav.Link>
                                <Nav.Link to="/Contact" as={NavLink} activeClassName="active">Contact Me!</Nav.Link >
                            </>
                    </Nav>
                    <>
                    <span className="navbar-text">
                                Hello
                                </span>
                                <Nav.Link type="button" className="btn btn-secondary my-2 text-white " onClick={""}> Log Out </Nav.Link>
                     </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};