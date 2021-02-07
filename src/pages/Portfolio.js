import React, { useState } from "react";
import Project from "../components/Projects";
import { Segment, Header, Divider, Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function Portfolio() {
  const [projects] = useState([
    {
      name: "Web-Buffet",
      url: "https://glacial-atoll-63430.herokuapp.com/",
      github: "https://github.com/JoshCarter8400/project-3",
      image: "web-buffet.png",
    },
    {
      name: "Evil Trivia",
      url: "https://stephen-harding1.github.io/Evil-Trivia/",
      github: "https://github.com/Stephen-Harding1/Evil-Trivia",
      image: "evil-trivia.png",
    },
    {
      name: "Run Buddy",
      url: "https://lucasmbarros.github.io/run-buddy/",
      github: "https://github.com/lucasmbarros/run-buddy",
      image: "run-buddy.png",
    },
  ]);

  return (
    <>
      <Divider horizontal>
        <Header as="h1" style={{ fontSize: "4em" }}>
          Portfolio
        </Header>
      </Divider>
      <Container text>
        <Segment>
          {projects.map((project, i) => (
            <Project project={project} key={i}></Project>
          ))}
        </Segment>
      </Container>
    </>
  );
}
export default Portfolio;
