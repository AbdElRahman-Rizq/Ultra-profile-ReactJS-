import React ,{ Component } from "react";

import Profile from "./../Profile";
import Portfolio from "./../Portfolio";
import Work from "./../Work";
import SocialMedia from "./../SocislMedia";
import Footer from "./../Footer";
import About from "./../About";
import Home from "./../Home";

class Index extends Component {
  render() {
    return (
      <div>
        <Home></Home>
        <Work></Work>
        <Portfolio></Portfolio>
        <Profile></Profile>
        <About></About>
        <SocialMedia></SocialMedia>
        <Footer></Footer>
      </div>
      
    );
  }
}

export default Index;
