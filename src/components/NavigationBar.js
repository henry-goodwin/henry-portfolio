import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import LinkedInLogo from "../assets/LI-In-Bug.png";

const NavDiv = styled.div`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const NavigationBar = () => (
  <NavDiv>
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Henry's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="d-flex">
            <a href="https://www.linkedin.com/in/henry-goodwin-62974376/">
              <img
                src={LinkedInLogo}
                width="35.27"
                height="30"
                className="d-inline-block align-top"
                alt="LinkedIn"
              />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </NavDiv>
);
