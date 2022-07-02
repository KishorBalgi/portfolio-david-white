import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  function redirectTo(url) {
    window.open(url, "_blank");
    return;
  }
  return (
    <Card className="project-card-view" onClick={() => redirectTo(props.link)}>
      <Card.Img variant="top" src={props.img} alt="card-img" />
      <Card.Title style={{ margin: "10px" }}>{props.title}</Card.Title>
      <p className="project-desc">{props.description}</p>
      <div className="glow"></div>
    </Card>
  );
}
export default ProjectCards;
