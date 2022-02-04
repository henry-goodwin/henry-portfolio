import React from "react";
import { Button, Card } from "react-bootstrap";

export const ProjectCard = ({ title, body, link }) => (
  <Card>
    <Card.Img variant="top" />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{body}</Card.Text>
      <Button variant="primary">Visit Page</Button>
    </Card.Body>
  </Card>
);
