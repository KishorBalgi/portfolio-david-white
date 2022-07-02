import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesCarousel from "./ServicesCarousel";

export const Services = () => {
  return (
    <section>
      <Container fluid className="services-section" id="services">
        <Container>
          <Row>
            <Col>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                <strong className="purple">SERVICES</strong>
              </h1>
              <ServicesCarousel />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Services;
