import React from "react";
import {
  Navbarsection,
  LinkTag,
  Logo,
  LogoText,
  Anchor,
  ListItem,
  UlList,
} from "./style.js";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Navbarsection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <UlList>
          <ListItem>
            <LinkTag to="/">Home</LinkTag>
          </ListItem>
          <ListItem>
            <Anchor>Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor>About</Anchor>
          </ListItem>
          <Link to="/contact">
            <ListItem>
              <Anchor>Contact</Anchor>
            </ListItem>
          </Link>
        </UlList>
      </div>
    </Navbarsection>
  );
};

export default Navbar;
