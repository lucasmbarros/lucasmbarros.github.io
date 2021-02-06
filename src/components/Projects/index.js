import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Project = ({ project }) => {
  console.log(project);
  return (
    <>
      <Card fluid>
        <Image
          src={require(`../../../public/images/${project.image}`).default}
        />
        <Card.Content>
          <Card.Header>
            <a href={project.url}>{project.name}</a>
          </Card.Header>
        </Card.Content>
        <Card.Content extra>
          <a href={project.github}>
            <Icon name="github" />
            Repository
          </a>
        </Card.Content>
      </Card>
      <br />
    </>
  );
};

export default Project;
