import React from 'react';
import {  Nav } from 'react-bootstrap';
import './footer.css';

function Footer(/*props*/) {
  return (
    <footer>
      <Nav justify  defaultActiveKey="/home" className="footer-section">
        <Nav.Item>
          <Nav.Link className="footer-link" href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="footer-link" href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="footer-link" href="/gallery">Gallery</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link className="footer-link" href="/usertable">User List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="footer-link" href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
       {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">XYZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
              <Nav.Link href="/usertable">User List</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar> */}
    </footer>
  );
}

export default Footer;