import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="md"
      style={{
        backgroundColor: "#121212", // Darker background color
        borderBottom: "3px solid #3C9CD4", // Muted Trans Pride blue accent
        padding: "16px",
        color: "#E0E0E0", // Light gray color for text
      }}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/" aria-label="Trans Advocacy and Complaint Collective Logo">
          <img
            src="/media/tacc.png" // Replace with an actual Trans-themed logo or image
            width="50"
            alt="Trans Advocacy and Complaint Collective Logo"
            style={{
              borderRadius: "50%", // Rounded logo image
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          style={{
            borderColor: "#E0E0E0", // Light gray border for toggle
          }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/articles/page/0.html">Articles</Nav.Link>
            <Nav.Link href="/about.html">About</Nav.Link>
            <Nav.Link href="/contact.html">Contact</Nav.Link>
            <Nav.Link href="/policy/readme.html">Policy</Nav.Link>
            {/* Additional Nav Links can go here */}
          </Nav>
          <Nav className="text-end">
            <Nav.Link href="https://members.ukpirate.party/">
              Member Zone
            </Nav.Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Header;
