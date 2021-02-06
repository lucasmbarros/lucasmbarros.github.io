import "semantic-ui-css/semantic.min.css";
import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const Home = () => (
  <>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Sometimes you have to fly before you can walk!
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              "Learn something new every day. Practice something new every week.
              Teach something new every month. Progression never ends!" - Lucas
              B.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="\images\ursidawn art.png"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Shoot Me a Message
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              It might be the start of a great professional relationship.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Have any problems?
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              I could be the one to help you out.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text textAlign="center">
        <Header as="h3" style={{ fontSize: "2em" }}>
          Go take a look at the portfolio!
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Let's make something personal and meaningful to you!
        </p>
      </Container>
    </Segment>
  </>
);

export default Home;
