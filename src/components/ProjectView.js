import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import styled from "styled-components";
import { ProjectCard } from "./ProjectCard";

const CardWrapper = styled.div`
  padding-bottom: 10px;
  padding-top: 10px;
`;

function ProjectView() {
  const projects = [
    {
      name: "Solver",
      languages: ["Swift"],
      description:
        "Solver is a community place for mathematical equations aimed to help students with solving math equations. This IOS application allowed users to solve and rearrange equations to solve for unknown variables. This app was made available to users on the App Store.",
    },
    {
      name: "NBA Tkinter",
      languages: ["Python"],
      description:
        "NBA Tkinter was a university project made to explore for and while loops. A random sequence was created and the program was required to draw the cards based on that sequence. The final grade I received for this project was 25/25.",
    },
    {
      name: "Live Music Brisbane",
      languages: ["Python", "SQL"],
      description:
        "Live Music Brisbane was a university project that was created to explore web scraping and SQL-databases. The final grade I received for this project was 25/25.",
    },
    {
      name: "Tom & Jerry Game",
      languages: ["C"],
      description:
        "The Tom & Jerry Game was a university project that was made to understand low-level programming. It used physical hard and explored the relationships between hardware and software. The final grade I received for this project was 24.75/30.",
    },
    {
      name: "Music Detection",
      languages: ["Python"],
      description:
        "The music detection program was created as a university project to further understand IOT devices. It used a Raspberry Pi and hardware components to listen to music currently playing nearby. It then connected to an API to detect what song was playing, it then displayed this information and saved it to a Dropbox File. The final grade I received for this project was 22/25.",
    },
    {
      name: "Genomic Sequence Retrieval",
      languages: ["C#"],
      description:
        "This university project was created to perform various search functions on a long complex string of genomic sequences. External libraries were not allowed for the project, so all libraries and algorithms were created from scratch. The final grade I received for this project was 45.5/50.",
    },
    {
      name: "Sole Marketplace",
      languages: ["HTML", "CSS", "Python", "SQL"],
      description:
        "Sole Marketplace was a university project made to explore web developed. It used Flask and SQL to manage pages and user data. The final grade I received for this project was 46/50.",
    },
    { name: "Electronic Trading Platform", languages: ["Java", "SQL"] },
    {
      name: "This Website!",
      languages: ["React", "Javascript", "HTML"],
      description:
        "This website was created as a personal project to showcase my knowledge of web development. Specifically my knowledge of React. It also was created to showcase all the projects I have made to potential recruiters.",
    },
    {
      name: "Student Connect+",
      languages: ["Kotlin", "Swift"],
      description:
        "I was a member of a team who developed a IOS and Android application for students. The application allowed high school students to access their timetables, class information and homework. This was developed using Google Firebase, Swift and Kotlin. It used API’s, JavaScript, and HTML scraping to retrieve the data. The final application was made available on the Google Play Store and App Store. For this project I received the IAwards Queensland Senior Student Award and the Queensland Young ICT Explorers Year 11-12 Award.",
    },
  ];

  const [searchTerm, setSearchTerm] = useState([]);

  const languageOptions = [
    { value: "C", label: "C" },
    { value: "CSS", label: "CSS" },
    { value: "C#", label: "C#" },
    { value: "HTML", label: "HTML" },
    { value: "Java", label: "Java" },
    { value: "Javascript", label: "Javascript" },
    { value: "Kotlin", label: "Kotlin" },
    { value: "Python", label: "Python" },
    { value: "React", label: "React" },
    { value: "SQL", label: "SQL" },
    { value: "Swift", label: "Swift" },
  ];

  const animatedComponents = makeAnimated();

  return (
    <div>
      <Select
        isMulti
        name="languages"
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={languageOptions}
        className="basic-multi-select"
        classNamePrefix="Filter"
        placeholder="Select programming language/s"
        onChange={(event) => {
          const optionValues = event.map(({ value }) => value);
          let filtered = projects.filter((project) =>
            project.languages.some((language) =>
              optionValues.includes(language)
            )
          );
          setSearchTerm(filtered);
        }}
      />
      {searchTerm
        .sort((a, b) => {
          return a.name - b.name;
        })
        .map((value, index) => {
          return (
            <CardWrapper key={index}>
              <ProjectCard
                title={value.name}
                body={value.description}
                languages={value.languages}
              />
            </CardWrapper>
          );
        })}
    </div>
  );
}

export default ProjectView;
