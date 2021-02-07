import React, { Component } from "react";
import { Container, Grid, Header, Segment, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
          <Header as="h4" inverted >
          <a href="https://github.com/lucasmbarros" target="_blank">
                  <Icon name="github" />
                  Github
                </a>
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
          <Header as="h4" inverted>
          <a href="https://www.linkedin.com/in/lucas-barros-40abbb1b3/" target="_blank">
                  <Icon name="linkedin" />
                  LinkedIn
                </a>
            </Header>
          </Grid.Column>          
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
