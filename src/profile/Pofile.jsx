import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Button } from "react-bootstrap";
import { EnvelopeFill, Discord, Twitter } from "react-bootstrap-icons";
import BodyPage from "../partials/BodyPage";

const ProfilePage = ({ article }) => {
  console.log("ProfilePage->",article)
  // Destructure member object
  const { 
    name,
    role,
    description,
    email,
    discord,
    twitter,
    image,
    hobbies,
    expertise,
  } = article?.data || {};

  // Fallback content if none is provided
  const content = article?.content || "<p>No content available</p>";

  return (
    <BodyPage
      title={name || "Profile"}
      description={`Learn more about ${name || "our team member"}`}
    >
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col lg={8}>
            <article>
              {/* Profile Image */}
              {image && (
                <div className="text-center mb-4">
                  <img
                    src={image}
                    alt={`Profile of ${name}`}
                    className="img-fluid rounded-circle shadow-sm"
                    style={{ maxWidth: "200px", height: "auto" }}
                    loading="lazy"
                  />
                </div>
              )}
              {/* Name and Role */}
              <h1 className="entry-title text-center mb-2">{name}</h1>
              {role && <p className="text-muted text-center mb-4">{role}</p>}
              {/* Description */}
              {description && (
                <div className="mb-4">
                  <p>{description}</p>
                </div>
              )}
              {/* Expertise and Hobbies */}
              {expertise && (
                <div className="mb-3">
                  <strong>Expertise:</strong> {expertise}
                </div>
              )}
              {hobbies && (
                <div className="mb-3">
                  <strong>Hobbies:</strong> {hobbies}
                </div>
              )}
              {/* Additional Profile Content */}
              <div
                className="entry-content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {/* Contact Buttons */}
              <div className="d-flex justify-content-center mt-4">
                {email && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={`mailto:${email}`}
                    className="mx-1"
                    aria-label={`Email ${name}`}
                  >
                    <EnvelopeFill /> Email
                  </Button>
                )}
                {discord && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1"
                    aria-label={`Discord ${name}`}
                  >
                    <Discord /> Discord
                  </Button>
                )}
                {twitter && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-1"
                    aria-label={`Twitter ${name}`}
                  >
                    <Twitter /> Twitter
                  </Button>
                )}
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </BodyPage>
  );
};

ProfilePage.propTypes = {
  member: PropTypes.shape({
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
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default ProfilePage;
