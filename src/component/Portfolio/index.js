import React, { useEffect, useState } from "react";
import {
  PortfolioSection,
  Title,
  Img,
  ImageBox,
  Overlay,
  OverlaySpan,
  List,
  ListItem,
  TitleSpan,
} from "./style.js";
import axios from "axios";

const Portfolio = () => {

  let [Images, setImages] = useState([]);
  useEffect(() => {
    axios.get("JS/data.json").then((res) => setImages(res.data.portfolio));
    
  
  }, []);
 

  

  return (
    <PortfolioSection>
      <div>
        <Title>
          <TitleSpan>My</TitleSpan> Portfolio
        </Title>
        <List>
          <ListItem active>All</ListItem>
          <ListItem >HTML</ListItem>
          <ListItem>Photoshop</ListItem>
          <ListItem>Wordpress</ListItem>
          <ListItem>Mobile</ListItem>
        </List>
        

        {Images &&
          Images.map((imag) => (
            <ImageBox key={imag.id}>
              <Img alt="missed" src={imag.image}></Img>
              <Overlay>
                <OverlaySpan>Show Image</OverlaySpan>
              </Overlay>
            </ImageBox>
          ))}
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;
