import React from "react";
import {
  Card,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Team = () => (
  <div>
    <Segment style={{ padding: "5em 0em" }} vertical>
      <Divider horizontal>
        <Header as="h1" style={{ fontSize: "4em" }}>
          About Me
        </Header>
      </Divider>
      <Grid container stackable verticalAlign="middle">
        <Divider></Divider>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Lucas Barros
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Responsible, passionate, and a strong leader achieving profitable
              growth efficiently being reliable and professional, with years of
              experience supporting executives, sales, and managers to improve
              internal operations. Accomplishing outstanding results with
              quality services in all participating fields.
              <br />
              <br />
              "Learn something new every day. Practice something new every week.
              Teach something new every month. Progression never ends!" - Lucas
              B.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Card>
              <Image src="/images/lucas.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>Developing since 2020</Card.Header>
                <Card.Meta>
                  <a href="/">Portfolio</a>
                </Card.Meta>
                <Card.Description>
                  javascript <br />
                  Html <br />
                  CSS <br />
                  MERN
                  <br />
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <a href="https://github.com/lucasmbarros">
                  <Icon name="github" />
                  Github
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="mail" />
                  lucasmello.barros@gmail.com
                </a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        <Divider></Divider>
      </Grid>
    </Segment>
  </div>
);

export default Team;
