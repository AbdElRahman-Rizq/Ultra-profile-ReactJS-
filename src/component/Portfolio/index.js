import React, { useCallback, useEffect, useState } from "react";
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
  let [Active, setActive] = useState('0');
  useEffect(() => {
    axios.get("JS/data.json").then((res) => setImages(res.data.portfolio));
    
  
  }, []);
 const handleActive=useCallback((id)=>{
  setActive(id);
 },[]);

 const handleImages=(Class)=>{
if(Class==="One"){
  if(Active==="0"||Active==="1") return null;
  else return {display:'none'};
}
else if (Class==='Two'){
  if(Active==="0"||Active==="2") return null;
  else return {display:'none'};
}
else if (Class==='Three'){
  if(Active==="0"||Active==="3") return null;
  else return {display:'none'};
}
else if (Class==='Four'){
  if(Active==="0"||Active==="4") return null;
  else return {display:'none'};
}
else return {display:'none'}
 }
  

  return (
    <PortfolioSection id="Portfolio">
      <div>
        <Title>
          <TitleSpan>My</TitleSpan> Portfolio
        </Title>
        <List>
          <ListItem className={Active==='0'&&'active'} onClick={()=>handleActive('0')}>All</ListItem>
          <ListItem className={Active==='1'&&'active'} onClick={()=>handleActive('1')}>JavaScript</ListItem>
          <ListItem className={Active==='2'&&'active'} onClick={()=>handleActive('2')}>Photoshop</ListItem>
          <ListItem className={Active==='3'&&'active'} onClick={()=>handleActive('3')}>Wordpress</ListItem>
          <ListItem className={Active==='4'&&'active'} onClick={()=>handleActive('4')}>Mobile</ListItem>
        </List>
        

        {Images &&
          Images.map((imag) => (
            <ImageBox key={imag.id}  style={handleImages(imag.class)}>
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
