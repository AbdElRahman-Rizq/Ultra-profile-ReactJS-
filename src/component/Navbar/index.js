import React,{useCallback, useState}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Navbarsection,
  LinkTag,
  Logo,
  LogoText,
  ListItem,
  UlList,
BarIcon,
CloseIcon,
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
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        
          <BarIConSection><FontAwesomeIcon icon={faBars} style={BarIcon} className="Icon" onClick={toggleFun}/></BarIConSection>
        <h3>
          <FontAwesomeIcon icon={faXmark} style={CloseIcon}/>
          </h3>
        
        <UlList className= {toggle && "active"}>
          <ListItem>
            <LinkRouter to="/">Home</LinkRouter>
          </ListItem>
          <ListItem>
            <LinkTag  to="Work" smooth={true} spy={true} duration="500">Work</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag>Portfolio</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag>Resume</LinkTag>
          </ListItem>
          <ListItem>
            <LinkTag>About</LinkTag>
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
