import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu fixed="top" inverted>
    <Container>
      <Menu.Item header>
        <Image
          size="mini"
          src="\logo192.png"
          style={{ marginRight: "1.5em" }}
        />
        Lucas Barros
      </Menu.Item>
      <Menu.Item as={Link} to="/">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/about">About</Menu.Item>
      <Menu.Item as={Link} to="/portfolio">Portfolio</Menu.Item>
      <Menu.Item as={Link} to="/resume">Resume</Menu.Item>
      <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
