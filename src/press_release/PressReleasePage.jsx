import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BodyPage from "../partials/BodyPage";

const PressReleasePage = ({ pressRelease, relatedPressReleases = [] }) => {
  // Destructure pressRelease object with defaults
  const {
    title = "Untitled Press Release",
    description = "No description available.",
    summary,
    author = "Unknown Author",
    datePublished = new Date().toISOString(),
    htmlContent = "<p>No content available.</p>",
    imageUrl = "/media/default-image.jpg",
    id,
  } = pressRelease || {};

  // Function to format date in a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <BodyPage
      title={title}
      description={summary || description}
      header={
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="article" />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={`https://example.com/press-releases/${id}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={imageUrl} />
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PressRelease",
              headline: title,
              description: description,
              image: [imageUrl],
              datePublished: datePublished,
              author: {
                "@type": "Person",
                name: author,
              },
              publisher: {
                "@type": "Organization",
                name: "Pirate Party UK (PPUK)",
                logo: {
                  "@type": "ImageObject",
                  url: "/media/PPUK-logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://example.com/press-releases/${id}`,
              },
            })}
          </script>
        </>
      }
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <article>
              <header className="mb-4">
                <h1 className="entry-title">{title}</h1>
                {summary && <p className="summary text-muted">{summary}</p>}
                <div className="dateline">
                  <p>
                    <strong>By:</strong> <span itemProp="name">{author}</span>
                    <br />
                    <time itemProp="datePublished" dateTime={datePublished}>
                      Published on {formatDate(datePublished)}
                    </time>
                  </p>
                </div>
              </header>
              {/* Article Image */}
              {imageUrl && (
                <figure className="text-center">
                  <img
                    src={imageUrl}
                    alt={title}
                    className="img-fluid mb-4"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </figure>
              )}
              {/* Article Content */}
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />

              {/* Social Sharing Buttons */}
              <div className="mt-5">
                <h5>Share this press release:</h5>
                <Button
                  variant="outline-primary"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=https://example.com/press-releases/${id}`}
                  target="_blank"
                  className="mr-2"
                >
                  Share on Twitter
                </Button>
                <Button
                  variant="outline-primary"
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://example.com/press-releases/${id}`}
                  target="_blank"
                >
                  Share on Facebook
                </Button>
              </div>
            </article>

            {/* Related Press Releases */}
            {relatedPressReleases.length > 0 && (
              <section className="mt-5">
                <h4>Related Press Releases</h4>
                <ul className="list-unstyled">
                  {relatedPressReleases.map((related) => (
                    <li key={related.id} className="mb-2">
                      <a href={`/press-releases/${related.id}`} className="text-primary">
                        {related.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </Col>
        </Row>
      </Container>
    </BodyPage>
  );
};

export default PressReleasePage;
