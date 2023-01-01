import styled from "styled-components";
export const AboutSection=styled.div`
height: 500px;
background: url('images/about-bg.jpg');
background-size: cover;
background-position: center;
background-attachment: fixed;
@media(max-width: 575px){
    height:0;
}
`
export const AboutInfo=styled.div`
    padding-top: 50px;
    width: 50%;
    float: right;
    @media(max-width: 767px){
        width:100%;
        padding-top:10%
    }
`
export const AboutTitle=styled.h2`
    font-weight: bold;
    font-size: 50px;
    `
    export const AboutTitleSpan=styled.span`
    font-weight: normal
    `
    export const AboutDirector=styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-bottom: 20px;
    @media(max-width: 767px){
        font-size: 32px;
    }
`
export const AboutDesc=styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8
`


