import React, { Component } from "react";
import { Container, Grid, Header, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
          <Header as="h4" inverted>
              Github
            </Header>
          </Grid.Column>
          <Grid.Column width={3}>
          <Header as="h4" inverted>
              LinkedIn
            </Header>
          </Grid.Column>          
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
