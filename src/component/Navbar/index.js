import React,{useCallback, useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import {
  Navbarsection,
  LinkTag,
  Logo,
  LogoText,
  ListItem,
  UlList,
BarIcon,
BarIConSection,
LinkRouter
} from "./style.js";
const Navbar = () => {
  const [toggle,setToggle]=useState(false);

  const toggleFun=useCallback(()=>{
      
          setToggle(!toggle);
  },[toggle]);
   
  return (
    <Navbarsection>
      <div className="container">
        <Logo to="/">
          <LogoText>Ultra Profile</LogoText>            
        </Logo>
        
          <BarIConSection><FontAwesomeIcon icon={faBars} style={BarIcon}  className="Icon" onClick={toggleFun}/></BarIConSection>
        
        <UlList className= {toggle && "active"}>
          <ListItem>
            <LinkTag to="Home" smooth={true} offset={-66} duration={500}>Home</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag  to="Work" smooth={true} offset={-66} duration={500}>Work</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag to="Portfolio" smooth={true} offset={-66} duration={500}>Portfolio</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag to="Profile" smooth={true} offset={-66} duration={500}>Resume</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag to="About" smooth={true} offset={-66} duration={500}>About</LinkTag>
          </ListItem>
          <ListItem>
            <LinkRouter to="contact">Contact</LinkRouter>
          </ListItem>
        </UlList>
      </div>
    </Navbarsection>
  );
};

export default Navbar;
