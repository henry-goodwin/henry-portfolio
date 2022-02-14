import React from "react";
import { Button, Container, Image, ListGroup, Row, Col } from "react-bootstrap";
import profilePic from "../assets/profilePic.png";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: "#FDF5DF";
  padding: 20px;
`;

const ImageWrapper = styled.div`
  padding-right: 10px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const CenterWrapper = styled.div`
  text-align: center;
  padding-bottom: 20px;
`;

const AboutMeDiv = styled.div`
  padding-top: 20px;
`;

const WebLink = styled.a`
  text-decoration: none; /* no underline */
  color: white;

  &:hover {
    color: white;
  }
`;

const PaddingDiv = styled.div`
  padding: 10px;
`;

export const Home = () => (
  <Wrapper>
    <Container>
      <Row className="align-items-center">
        <Col sm={12} md={6} lg={4} xl={4}>
          <ImageWrapper>
            <Image
              roundedCircle="true"
              thumbnail="true"
              alt="profilePic"
              src={profilePic}
            />
          </ImageWrapper>
        </Col>
        <Col>
          <CenterWrapper>
            <h1>Hello World, I am Henry :)</h1>
            <h2>It's nice to meet you.</h2>
            <p>Welcome to my portfolio!</p>
            <Button href="projects" variant="primary">
              See My Projects
            </Button>
          </CenterWrapper>
        </Col>
      </Row>
      <AboutMeDiv>
        <h2>About Me</h2>
        <Row>
          <Col>
            <p>
              My name is Henry Goodwin, I am a full-time student in my
              penultimate year at the Queensland University of Technology.
              Currently I am studying a dual degree in Business and Information
              Technology. My majors are Finance and Computer Science and will
              graduate in November 2023. I made this website to showcase my
              knowledge and skills as a software engineer, check out some of my
              proficient programming languages below.
            </p>
          </Col>
        </Row>

        <ListGroup>
          <ListGroup.Item>Python</ListGroup.Item>
          <ListGroup.Item>React/Javascript</ListGroup.Item>
          <ListGroup.Item>C/C#</ListGroup.Item>
          <ListGroup.Item>HTML/CSS</ListGroup.Item>
          <ListGroup.Item>Java/Kotlin</ListGroup.Item>
          <ListGroup.Item>Swift</ListGroup.Item>
          <ListGroup.Item>SQL/NOSQL</ListGroup.Item>
        </ListGroup>
      </AboutMeDiv>
    </Container>
  </Wrapper>
);
