import PropTypes from "prop-types";
import React, { Component } from "react";
import { Container, Header, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// import components
import Navbar from "../Navbar/index";

const HeaderComp = ({ mobile }) => (
  <>
    <Navbar />
    <Segment
      inverted
      color="black"
      textAlign="center"
      style={{ minHeight: 100, padding: "1em 0em" }}
      vertical
      fluid
    >
      <Segment inverted textAlign="center" style={{ minHeight: 200 }}>
        <br />
        <Header
          as="h1"
          content="Lucas' Portfolio"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "1.5em" : "0",
          }}
        />
        <Header
          as="h2"
          content="Digital Perfection"
          inverted
          style={{
            fontSize: mobile ? "1.5em" : "1.7em",
            fontWeight: "normal",
            marginTop: mobile ? "0.5em" : "1.5em",
          }}
        />
      </Segment>
    </Segment>
  </>
);

HeaderComp.propTypes = {
  mobile: PropTypes.bool,
};

export default HeaderComp;
