import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-5" style={{ opacity: 1 }}>
    <Container className='my-4'>
      {/* Top Section with Logo and Social Icons */}
      <Row className="footer-top align-items-center">
        <Col md={6} className="mb-3 mb-md-0">
          <a href="/" className="logo-footer" style={{ textDecoration: 'none' }}>
          <Image
            src={require("/favicon.ico")} // Ensure this path correctly points to your favicon
            alt="Kawthar Mashkour Logo"
            width={40}
            height={24}
            className="me-2" // Adds space between the icon and the text
          />
            <b>Kawthar Mashkour</b>
          </a>
        </Col>
        <Col md={6} className="text-md-end text-center">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-icon me-3">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer" className="social-icon me-3">
            <i className="fab fa-dribbble"></i>
          </a>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <i className="fab fa-behance"></i>
          </a>
        </Col>
      </Row>

      {/* Divider */}
      <hr className="mt-4" />

      <Row className="footer-middle pt-0">
        {/* Links Section - All in one row */}
        <Col className="d-flex justify-content-start gap-3">
            <a href="/resume" className="footer-list-link">About</a>
            <a href="/portfolio" className="footer-list-link">Portfolio</a>
            <a href="/contact" className="footer-list-link">Contact</a>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
