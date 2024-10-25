import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { Envelope, Discord, Twitter } from 'react-bootstrap-icons';
import BodyPage from "../partials/BodyPage";

const teamMembers = [
  {
    name: "Lucy",
    role: "Party Leader",
    description:
      "Lucy is the current leader of the Pirate Party UK. She is dedicated to promoting transparency, democracy, and digital rights, while advocating for marginalized communities.",
  },
  // Add more team members as needed
];

function WhoWeAre() {
  return (
    <BodyPage title={"Who We Are"} description={"Meet the team behind the Pirate Party UK"}>
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="text-body-emphasis">Our Team</h1>
          <p className="fs-5 text-muted">
            Get to know the passionate individuals working to uphold our values and lead our initiatives.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {teamMembers.map((member, index) => (
            <Col key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-around">
                    {member.email && (
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                        <Button variant="outline-secondary" size="sm">
                          <Envelope /> Email
                        </Button>
                      </a>
                    )}
                    {member.discord && (
                      <a href={member.discord} aria-label={`Discord ${member.name}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-secondary" size="sm">
                          <Discord /> Discord
                        </Button>
                      </a>
                    )}
                    {member.twitter && (
                      <a href={member.twitter} aria-label={`Twitter ${member.name}`} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-secondary" size="sm">
                          <Twitter /> Twitter
                        </Button>
                      </a>
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

export default WhoWeAre;
