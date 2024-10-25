import React from "react";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
import { EnvelopeFill, Discord, Twitter } from 'react-bootstrap-icons';
import BodyPage from "../partials/BodyPage";

const teamMembers = [
  {
    name: "Lucy",
    role: "Party Leader",
    description:
      "Lucy is the current leader of the Pirate Party UK. She is dedicated to promoting transparency, democracy, and digital rights while advocating for marginalized communities.",
    email: "lucy@piratepartyuk.org",
    discord: "https://discord.gg/t8EDRgXzMH",
    twitter: "https://twitter.com/lucy_pirate",
    image: "/images/lucy.jpg",
    hobbies: "Cycling, Open-source Development, Reading Sci-Fi",
    expertise: "Digital Rights, Policy Development, Community Engagement"
  },
  {
    name: "Alex Johnson",
    role: "Head of Communications",
    description:
      "Alex manages our communications team and works tirelessly to ensure our message reaches the public effectively.",
    email: "alex@piratepartyuk.org",
    discord: "https://discord.gg/xxxxxxx",
    twitter: "https://twitter.com/alex_pirate",
    image: "/images/alex.jpg",
    hobbies: "Photography, Blogging, Traveling",
    expertise: "Media Relations, Social Media Strategy, Public Speaking"
  },
  // Add more team members as needed
];

function WhoWeAre() {
  return (
    <BodyPage title="Who We Are" description="Meet the team behind the Pirate Party UK">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h1 className="display-4">Our Team</h1>
          <p className="lead text-muted">
            Get to know the passionate individuals working to uphold our values and lead our initiatives.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="g-4">
          {teamMembers.map((member, index) => (
            <Col key={index}>
              <Card className="h-100 text-center shadow-sm">
                {member.image && (
                  <Card.Img variant="top" src={member.image} alt={member.name} />
                )}
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                  <hr />
                  <Card.Text>
                    <strong>Expertise:</strong> {member.expertise}
                  </Card.Text>
                  <Card.Text>
                    <strong>Hobbies:</strong> {member.hobbies}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <div className="d-flex justify-content-center">
                    {member.email && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={`mailto:${member.email}`}
                        className="mx-1"
                      >
                        <EnvelopeFill /> Email
                      </Button>
                    )}
                    {member.discord && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={member.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-1"
                      >
                        <Discord /> Discord
                      </Button>
                    )}
                    {member.twitter && (
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mx-1"
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

export default WhoWeAre;
