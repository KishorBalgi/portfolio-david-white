import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import Skills from "./Skills";
import Tools from "./Tools";
import Education from "./Education";
import profile from "../../Assets/profile.jpg";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">ABOUT ME</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    I'm an incoming Digital Intern at TRC companies, working in
                    product-based software. I’m a Junior majoring in Computer
                    Science at North Carolina State University.
                    <br />
                    <br />
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} style={{ padding: "50px" }} className="about-img">
            <img
              src={profile}
              alt="about"
              className="img-fluid"
              style={{ borderRadius: "50%" }}
            />
          </Col>
        </Row>
        <h1>
          <span className="purple">EDUCATION</span>
        </h1>
        <Education />
        <h1 className="project-heading">
          <strong className="purple">SKILLS</strong>
        </h1>

        <Skills />
        <h1 className="project-heading">
          <strong className="purple">TECHNICAL SKILLS</strong>
        </h1>
        <Tools />
      </Container>
    </Container>
  );
}

export default About;
