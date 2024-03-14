import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "gatsby";

export default (props) => (
  <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About us</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)