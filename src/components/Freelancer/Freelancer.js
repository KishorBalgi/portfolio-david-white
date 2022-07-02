import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import freelancer from "../../Assets/freelancer.png";
function Freelancer() {
  return (
    <section>
      <Container fluid className="freelancer-section ">
        <Row>
          <Col md={6} sm={12}>
            <img src={freelancer} alt="freelancer" className="freelancer-img" />
          </Col>
          <Col md={6} sm={12} className="freelance-desc">
            <h1>
              <span className="purple">FREELANCER</span>
            </h1>
            <p>
              Worked with 10+ organizations from around the world, developing
              websites and mobile apps that include Healthcare, Painting,
              Education, Booking, E-Commerce and so on.
            </p>
            <div className="freelance-count">
              <div>
                <h1>25</h1>
                <p>Contract Projects</p>
              </div>
              <div>
                <h1>5</h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Freelancer;
