import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Navbar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item as="a" header>
        <Image size="mini" src="\logo192.png" style={{ marginRight: "1.5em" }} />
        Lucas Barros
      </Menu.Item>
      <Menu.Item as="a">Home</Menu.Item>
      <Menu.Item as="a">About</Menu.Item>
      <Menu.Item as="a">Portfolio</Menu.Item>
      <Menu.Item as="a">Resume</Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
