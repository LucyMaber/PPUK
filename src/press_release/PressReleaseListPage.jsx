import React from "react";
import { Card, Button } from "react-bootstrap";
import BodyPage from "partials/BodyPage";
import ReactDOM from "react-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./PressReleaseListPage.css"; // Import custom CSS for styling

const PressReleaseListPage = ({ pressReleases, pageNo, totalPages }) => {
  // Error handling for missing or invalid data
  if (!pressReleases || !Array.isArray(pressReleases) || pressReleases.length === 0) {
    return (
      <BodyPage title="" description="">
        <p>No press releases available.</p>
      </BodyPage>
    );
  }

  return (
    <BodyPage title="Press Release List" description="List of press releases">
      <div className="container pb-5 mb-5">
        <div className="press-release-cards">
          {pressReleases.map((pressRelease) => {
            const { id, data } = pressRelease;
            return (
              <Card key={id} className="mb-3">
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.summary}</Card.Text>
                  <Button variant="primary" href={`/press-release/${data.slug}.html`}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
        {/* Pagination Buttons */}
        <div className="pagination-buttons">
          {pageNo > 0 && (
            <Button variant="outline-primary" href={`/press-release/page-${pageNo - 1}.html`} className="mr-2">
              Previous
            </Button>
          )}
          {pageNo < totalPages - 1 && (
            <Button variant="outline-primary" href={`/press-release/page-${pageNo + 1}.html`} className="ml-2">
              Next
            </Button>
          )}
        </div>
      </div>
    </BodyPage>
  );
};

// Ensure ReactDOM.hydrate is called only in the browser
if (typeof document !== "undefined") {
  ReactDOM.hydrate(<PressReleaseListPage />, document);
}

export default PressReleaseListPage;
