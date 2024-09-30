import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";

const ArticlePage = ({ htmlContent }) => {
  return (
    <BodyPage
      title={"Policies"}
      description={"Pirate Party UK Policy Documents"}
      header={
        <>
          {/* Meta tags can be more general since we no longer have specific props */}
          <meta property="og:title" content="Policies" />
          <meta property="og:description" content="Pirate Party UK Policy Documents" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://example.com/policies`} />
        </>
      }
    >
      {/* Use Container for main content */}
      <Container>
        <Row className="justify-content-center">
          {/* Use Col to control content width */}
          <Col lg={8}>
            <article>
              {/* Render HTML content dangerously (ensure HTML is safe) */}
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </article>
          </Col>
        </Row>
      </Container>
    </BodyPage>
  );
};

export default ArticlePage;
