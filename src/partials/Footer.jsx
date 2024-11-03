import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDiscord, FaGithub, FaMastodon, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#121212", // Dark background color
        padding: "20px",
        textAlign: "center",
        borderTop: "3px solid #C77D9B", // Muted Trans Pride pink accent
      }}
    >
      <Container>
        <Row className="align-items-center justify-content-center justify-content-md-between">
          <Col md={4} className="text-center text-md-start mb-3 mb-md-0">
            <p
              className="m-0"
              style={{
                color: "#3C9CD4",  // Same color for brand consistency
                fontWeight: "bold", // Increase font weight for better readability
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)", // Add subtle text shadow for contrast
              }}
            >
              &copy; {new Date().getFullYear()} Trans Advocacy and Complaint Collective
            </p>
          </Col>
          <Col md={4} className="text-center">
            <p className="mb-2 mb-md-0 text-light">Follow us:</p>
            <div className="social-links">
              <a href="https://discord.gg/t8EDRgXzMH" className="social-link me-3" title="Join us on Discord">
                <FaDiscord size={24} className="text-light" />
              </a>
              <a href="https://github.com/pirate-party-uk" className="social-link me-3" title="Check out our GitHub">
                <FaGithub size={24} className="text-light" />
              </a>
              <a rel="me" href="https://tech.lgbt/@pirate_party_uk" className="social-link me-3" title="Follow us on Mastodon">
                <FaMastodon size={24} className="text-light" />
              </a>
              <a rel="me" href="https://twitter.com/_PiratePartyUK" className="social-link me-3" title="Follow us on Twitter">
                <FaTwitter size={24} className="text-light" />
              </a>
            </div>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <a href="/privacy-policy.html" className="text-light me-3" title="Privacy Policy">
              Privacy Policy
            </a>
            <a href="/TermsAndConditionsPage.html" className="text-light me-3" title="Terms And Conditions">
            Terms And Conditions
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
