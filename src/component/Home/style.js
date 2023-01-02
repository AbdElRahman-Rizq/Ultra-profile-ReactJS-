import styled from "styled-components";

export const HomeTag = styled.div`
height: 500px;
background: url("images/home-bg.jpg");
background-size: cover;
background-attachment: fixed;
background-position: center center;
text-align: center;
position: relative;
@media (max-width: 765px) {
    background-attachment: unset;
     }
`
export const HomeInformation = styled.div`
    position: absolute;
    top: 62%;
    left: 50%;
    transform: translate(-50%,-50%);
    @media (max-width: 765px) {
    top: 65%;
    width:90%;
     }
`
export const HomeTitle = styled.h3`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;
    margin-bottom: 0px;
     // for tablet
    @media (max-width: 991px) {
        font-size: 3rem;
     }
     // for Landscape Mobile
     @media (max-width: 768px) {
         font-size: 2.35rem;
      }
      // for Mobiles
      @media (max-width: 425px) {
          font-size: 1.85rem;
       }
 

`
export const HomeInfo = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;
    // for Landscape Mobile
    @media (max-width: 768px) {
        font-size: 2rem;
     }
     // for Mobiles
     @media (max-width: 425px) {
         font-size: 1.5rem;
      }

`
export const HomeDescription = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;
    margin-top:0;
    // for Landscape Mobile
    @media (max-width: 768px) {
        // font-size: 2rem;
    }
    // for Mobiles
    @media (max-width: 425px) {
         width:85%;
         font-size: .94rem;
         margin-left:10%;
        }
         `
export const DescriptionSpan = styled.span`
    color: #000
`
export const HomeBtn = styled.a`
    background: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: bold;
    &:hover { 
    background: #fff;
    color: #eb5424
}`
