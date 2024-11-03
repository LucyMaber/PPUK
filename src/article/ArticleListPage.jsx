import React from "react";
import { Card, Button } from "react-bootstrap";
import BodyPage from "partials/BodyPage";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ArticleListPage.css"; // Import custom CSS for styling

const ArticleListPage = ({ articles, pageNo, totalPages }) => {
  // Error handling for missing or invalid data
  if (!articles || !Array.isArray(articles) || articles.length === 0) {
    return (
      <BodyPage title="" description="">
        <p>No articles available.</p>
      </BodyPage>
    );
  }

  return (
    <BodyPage title="Article List" description="List of articles">
      <div className="container pb-5 mb-5">
        <div className="article-cards">
          {articles.map((article) => {
            const { id, data } = article;
            return (
              <Card key={id} className="mb-3">
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.summary}</Card.Text>
                  <Button variant="primary" href={`/article/${data.slug}.html`}>
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
            <Button variant="outline-primary" href={`/article/page-${pageNo - 1}.html`} className="mr-2">
              Previous
            </Button>
          )}
          {pageNo < totalPages - 1 && (
            <Button variant="outline-primary" href={`/article/page-${pageNo + 1}.html`} className="ml-2">
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
  ReactDOM.hydrate(<ArticleListPage />, document);
}

export default ArticleListPage;
