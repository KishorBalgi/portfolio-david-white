import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import trc from "../../Assets/Projects/trc.webp";
import ncsu from "../../Assets/Projects/ncsu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          <strong className="purple">WORK EXPERIENCE</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img={trc}
              isBlog={false}
              title="Digital Intern, TRC Companies"
              description="Developed full-stack general-purpose charting software with a React.js front end. 
              Designed and implemented a backend with Node.js and PostgreSQL. 
              Participated in daily standups and other agile practices with a distributed team. 
              Tracked tasks and progress with Microsoft Azure DevOps. 
              Conducted automated and manual testing to validate software. 
              "
              link="https://www.trccompanies.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img={ncsu}
              isBlog={false}
              title="Undergraduate Research Assistant, North Carolina State University"
              description="Designed and implemented a trace visualization tool for analyzing Chrome stack and trace data. 
              Built a profiler in WebAssembly using the Emscripten compiler and Node.js. 
              Displayed data with PixiJS, parsed data with RapidJSON. 
              Engineered a tool capable of dynamically displaying thousands of data nodes at 30+ frames per second. 
              "
              link="https://www.ncsu.edu/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              img={Demo}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
