import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ServiceCard({ img, title, desc }) {
  return (
    <Row className="justify-content-center service-card">
      <Col lg={5} className="service-card-img">
        <img src={img} alt={title} />
      </Col>
      <Col lg={7} className="service-card-details" align="left">
        <h2>{title}</h2>
        <p>{desc}</p>
      </Col>
    </Row>
  );
}
