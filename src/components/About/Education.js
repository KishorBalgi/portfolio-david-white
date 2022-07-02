import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Education() {
  return (
    <Row className="education-details">
      <Col md={12}>
        <div>
          <h4>B.S. IN COMPUTER SCIENCE, NORTH CAROLINA STATE UNIVERSITY</h4>
          <div className="education-points">
            <p>Minor In Mathematics</p>
            <p>4.0 GPA</p>
            <p>4x Dean’s List</p>
            <p>3 ½ Year Graduate</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}
export default Education;
