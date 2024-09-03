import React from 'react';
import { Container, Image } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarOffCanvas() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3" fixed="top">
      <Container>
      <Image
            src="/favicon.ico" // Ensure this path correctly points to your favicon
            alt="Kawthar Mashkour Logo"
            width={40}
            height={24}
            className="me-2" // Adds space between the icon and the text
          />
        <Navbar.Brand href="/"><b>Kawthar Mashkour</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link  href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/portfolio"><b>Portfolio</b></Nav.Link>
            <Nav.Link href="/resume"><b>Resume</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarOffCanvas;