import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export const ProjectCard = ({ title, body, languages }) => (
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <ListGroup horizontal>
        {languages.map((language, index) => {
          return <ListGroup.Item key={index}>{language}</ListGroup.Item>;
        })}
      </ListGroup>
    </Card.Footer>
  </Card>
);
