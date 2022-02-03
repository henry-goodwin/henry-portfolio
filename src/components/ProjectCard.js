import React from "react";
import { Button, Card } from "react-bootstrap";

export const ProjectCard = () => (
    <Card>
        <Card.Img variant="top"/>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>Some example text about my development</Card.Text>
            <Button variant="primary">Visit Page</Button>
        </Card.Body>
    </Card>
);