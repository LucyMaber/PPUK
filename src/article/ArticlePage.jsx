import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";

const ArticlePage = ({ article }) => {
  // Destructure article object
  const { data, content = "<p>No content available</p>" } = article || {};
  console.log("Content:", content); // Ensure content is defined and correct
  const {
    title,
    summary,
    author = [],
    contributor = [],
    publishDate,
    imageUrl,
    imageAlt = "Image",
    description,
    id,
    keywords = []
  } = data || {};

  // Function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "Date not available";
    const date = new Date(dateString);
    return date.toDateString();
  };

  // Function to render authors and contributors
  const renderPeople = (people) => {
    if (!Array.isArray(people)) {
      return <span>{people.name || people}</span>;
    }
    return people.map((person, index) => (
      <span key={index}>{person.name || person}{index < people.length - 1 ? ', ' : ''}</span>
    ));
  };

  return (
    <BodyPage
      title={title || "Home"}
      description={description || "Welcome to the Pirate Party UK"}
      header={
        <>
          <meta property="og:title" content={title} />
          {description && <meta property="og:description" content={description} />}
          <meta property="og:type" content="article" />
          {id && <meta property="og:url" content={`https://example.com/articles/${id}`} />}
          {imageUrl && <meta property="og:image" content={imageUrl} />}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: title,
              description: description,
              author: Array.isArray(author)
                ? author.map((person) => ({
                    "@type": "Person",
                    name: person.name || person,
                  }))
                : { "@type": "Person", name: author.name || author },
              contributor: Array.isArray(contributor)
                ? contributor.map((person) => ({
                    "@type": "Person",
                    name: person.name || person,
                  }))
                : { "@type": "Person", name: contributor.name || contributor },
              datePublished: publishDate,
              image: imageUrl,
              publisher: {
                "@type": "Organization",
                name: "Trans Advocacy and Complaint Collective",
                logo: {
                  "@type": "ImageObject",
                  url: "/media/PPUK-logo.png",
                },
              },
              keywords: keywords.join(", "),
            })}
          </script>
        </>
      }
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <article>
              {/* Render article title */}
              <h1 className="entry-title">{title}</h1>
              {/* Render article summary if available */}
              {summary && <p className="summary text-muted">{summary}</p>}
              {/* Render authors and contributors */}
              <div className="dateline">
                {author.length > 0 && (
                  <>
                    by <span itemProp="name">{renderPeople(author)}</span>
                  </>
                )}
                {contributor.length > 0 && (
                  <>
                    <br />
                    Contributors: <span itemProp="contributor">{renderPeople(contributor)}</span>
                  </>
                )}
                <p>
                  <time itemProp="datePublished" dateTime={publishDate}>
                    published {formatDate(publishDate)}
                  </time>
                </p>
              </div>
              {/* Render HTML content dangerously */}
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: content || "<p>No content available</p>" }} />
            </article>
          </Col>
        </Row>
      </Container>
    </BodyPage>
  );
};

export default ArticlePage;
