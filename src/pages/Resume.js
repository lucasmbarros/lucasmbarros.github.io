import React from "react";
import { Container, Header, Segment, List, Divider } from "semantic-ui-react";

const Resume = () => (
  <Segment>
    <Container text>
    <Divider horizontal>
        <Header as="h1" style={{ fontSize: "4em" }}>
          Resume
        </Header>
      </Divider>
      <Header as="h4" textAlign="center">
      <a href={require('../assets/Lucas-Barros.pdf').default}>Download Resume!</a>
      </Header>
      <p>
        Responsible, passionate, and a strong leader achieving profitable growth
        efficiently being reliable and professional, with years of experience
        supporting executives, sales, and managers to improve internal
        operations. Accomplishing outstanding results with quality services in
        all participating fields.
      </p>
      <List>
        <List.Item>
          <List.Header>Department Leader</List.Header>Aerospace Technologies
          Group
        </List.Item>
        <List.Item>
          <List.Header>General Manager</List.Header>
          Overdiesel Ltda
        </List.Item>
        <List.Item>
          <List.Header>Financial Systems Specialist</List.Header>
          Rotor Diesel Ltda
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Resume;
