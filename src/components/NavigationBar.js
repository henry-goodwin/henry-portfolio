import React from "react";
import { Container, Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavigationBar = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="/">Henry's Portfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
