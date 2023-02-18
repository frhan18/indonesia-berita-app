import React from "react";
import { Col, Row } from "react-bootstrap";
export default function ProgramSectionTitle({ title }) {
  return (
    <Row className="justify-content-center mb-3">
      <Col md={12}>
        <h2 className="text-dark text-uppercase">{title}</h2>
      </Col>
    </Row>
  );
}
