import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { EnvelopeFill, Discord, Twitter } from "react-bootstrap-icons";
import BodyPage from "../partials/BodyPage";

function WhoWeAre({ articles }) {

  return (
    <BodyPage
      title="Who We Are"
      description="Meet the team behind the Pirate Party UK"
    >
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4">Our Team</h1>
          <p className="lead text-muted">
            Get to know the passionate individuals working to uphold our values
            and lead our initiatives.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {articles.map((member, index) => (
            <Col key={index}>
              <Card className="h-100 text-center shadow-sm">
                <a
                  href={`/profile/${member.data.slug}`} // Link to the ProfilePage with member's slug
                  className="text-decoration-none text-dark"
                >
                  {member.data.image && (
                    <Card.Img
                      variant="top"
                      src={member.data.image}
                      alt={member.data.name}
                    />
                  )}
                  <Card.Body>
                    <Card.Title>{member.data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {member.data.role}
                    </Card.Subtitle>
                    <Card.Text>{member.data.description}</Card.Text>
                    <hr />
                    {member.data.expertise && (
                      <Card.Text>
                        <strong>Expertise:</strong> {member.data.expertise}
                      </Card.Text>
                    )}
                    {member.data.hobbies && (
                      <Card.Text>
                        <strong>Hobbies:</strong> {member.data.hobbies}
                      </Card.Text>
                    )}
                  </Card.Body>
                </a>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    {member.data.email && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={`mailto:${member.data.email}`}
                        className="mx-1"
                        aria-label={`Email ${member.data.name}`}
                      >
                        <EnvelopeFill /> Email
                      </Button>
                    )}
                    {member.data.discord && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={member.data.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-1"
                        aria-label={`Discord ${member.data.name}`}
                      >
                        <Discord /> Discord
                      </Button>
                    )}
                    {member.data.twitter && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={member.data.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-1"
                        aria-label={`Twitter ${member.data.name}`}
                      >
                        <Twitter /> Twitter
                      </Button>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BodyPage>
  );
}

WhoWeAre.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        role: PropTypes.string,
        description: PropTypes.string,
        email: PropTypes.string,
        discord: PropTypes.string,
        twitter: PropTypes.string,
        image: PropTypes.string,
        hobbies: PropTypes.string,
        expertise: PropTypes.string,
        slug: PropTypes.string.isRequired,
      }).isRequired,
      content: PropTypes.string,
      fileName: PropTypes.string,
    })
  ).isRequired,
};

export default WhoWeAre;
