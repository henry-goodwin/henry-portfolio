import styled from "styled-components";
import ProjectView from "../components/ProjectView";

const Wrapper = styled.div`
  background-color: "#FDF5DF";
  padding: 20px;
`;

export const Projects = () => (
  <Wrapper>
    <h2>Projects</h2>
    <p>
      Here are a few projects that I have developed as personal projects or for
      university assessment.
    </p>
    <ProjectView />
  </Wrapper>
);
