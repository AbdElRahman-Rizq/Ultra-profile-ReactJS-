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
            <Anchor href="#Work">Work</Anchor>
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
          <ListItem>
            <LinkTag to="/contact">Contact</LinkTag>
          </ListItem>
          
        </UlList>
      </div>
    </Navbarsection>
  );
};

export default Navbar;
