import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { Col, Container, Row } from "react-bootstrap";

export const Projects = () => (
  <div>
    <Container fluid>
      <Row>
        <Col lg={true}>
          <ProjectCard
            title="Python"
            body="Througout my degree I have made a number of projects using python, click to see more"
            link="python"
          />
        </Col>
        <Col lg={true}>
          <ProjectCard title="React Web Development" body="" link="react" />
        </Col>
      </Row>
      <Row>
        <Col lg={true}>
          <ProjectCard
            title="C / C# / C++"
            body="I have developed a number of university projects using C languages"
            link="c"
          />
        </Col>
        <Col lg={true}>
          <ProjectCard
            title="Mobile Development"
            body="I have created a number of IOS and Android applications using Swift and Kotlin"
            link="ios"
          />
        </Col>
      </Row>
    </Container>
  </div>
);
