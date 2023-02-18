import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProgramItem({
  title,
  desc,
  buttonLinkName,
  buttonLinkTo,
  buttonLinkRedirectName,
  buttonLinkRedirect,
}) {
  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="idn-program-card mb-3">
        <Card.Body>
          <div className="idn-program__title">{title}</div>
          <div className="idn-program__desc">{desc}</div>
          <div className="idn-program__action">
            <div className="text-start">
              <Link to={buttonLinkTo} className="btn btn-md btn-dark rounded">
                {buttonLinkName}
              </Link>
              <Link
                to={buttonLinkRedirect}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-md btn-dark rounded ms-2"
              >
                {buttonLinkRedirectName}
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}
