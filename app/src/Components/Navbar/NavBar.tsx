import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./NavBar.scss";

export const NavBar: React.FC = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
         <Navbar.Brand href="#home">
          <i className="bi bi-shop-window" style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}></i>
          Hardware store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#menu">Menu</Nav.Link>
            <Nav.Link href="#about">About-us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};