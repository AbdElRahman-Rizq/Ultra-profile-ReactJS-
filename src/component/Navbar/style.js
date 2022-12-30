import { Link as LinkScroll } from "react-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbarsection = styled.div`
  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: fixed;
  top:0;
  width:100%;
  border-bottom: 1px solid #000;
  z-index:1;
  .active{
    display: block;
  }
`;
export const Logo = styled.div`
  width: 50%;
  float: left;
  padding-top: 1%;
  @media (max-width: 1024px) {
    width: 35%;
  }
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    
}
@media (max-width: 767px) {
    width:50%;
    display:inline-block;
  }

  @media (max-width: 575px) {
    width:53%;
padding-top:2%
  }
    `;
  
export const LogoText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const BarIConSection = styled.h3`
display:none;
@media(max-width:767px){
display:inline-block;
margin:2%;
float:right
}
@media(max-width:575px){
margin-top:3%;
margin-right:0
}
`
export const CloseIcon ={
    display:'none',
    fontSize:"30px"
}
    export const BarIcon ={
        fontSize:"30px",
    // width:'100%'
}

export const UlList = styled.ul`
  float: left;
  padding: 0;
  width: 50%;
  list-style: none;
  margin:1% 0;

  @media (max-width: 1024px) {
    width: 65%;
  }
  @media (max-width: 991px) {
    width: 100%;
    float: none;
    margin: 10px 15%;
}
@media(max-width:767px){
      display: none;
      margin:2%;
      text-align:center;
    }
  
     `;
    export const ListItem = styled.li`
    display: inline-block;
    text-decoration: none;
    @media(max-width:767px){
    display: block;
    padding:1% 0
  }
`;

export const LinkTag = styled(LinkScroll)`
color: #222;
text-decoration: none;
padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #eb5424;
  }
`
export const LinkRouter = styled(Link)`
color: #222;
text-decoration: none;
padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #eb5424;
  }
`
