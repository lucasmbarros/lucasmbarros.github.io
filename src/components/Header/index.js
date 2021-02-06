import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Header } from "semantic-ui-react";

// import components
import Navbar from "../Navbar/index";

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Navbar />
    <Header
      as="h1"
      content="Lucas Barros"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Portfolio"
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};
