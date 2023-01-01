import styled from "styled-components";

export const ProfileSkillsSection=styled.div`
padding: 50px 0;
overflow: hidden;
background-color:rgba(136, 136, 136, 0.205);
`
export const ProfileSection=styled.div`
    width: 50%;
    float: left;
    @media(max-width: 767px){
        width:100%;
        margin-bottom:1.5%
    }
`
export const ProfileList=styled.ul`
    list-style: none
`
export const ProfileListItem=styled.li`
    margin-bottom: 15px
`
export const ProfileListSpan=styled.span`
    display: inline-block;
    width: 70px;
    font-weight: bold
`
export const ProfileListWeb=styled.span`
    font-weight: normal;
    width: 110px;
    color: #eb5424
`
export const SkillsSection=styled.div`
    width: 50%;
    float: left;
    @media(max-width: 767px){
        width:100%;
        margin-top:5%
    }
`
export const SkillsDesc=styled.div`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 10px
`
export const SkillsBar=styled.div`
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`
export const BarTitle=styled.span`
    float: left;
`
export const BarPerc=styled.span`
    float: right;
    margin-right: 100px
`
export const BarParent=styled.div`
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px;
    padding:0.2%
`
 const BarParentSpan=`
 background: #eb5424;
 position: absolute;
 display: block;
 top: 0;
 left: 0;
 bottom: 0;
 `
    

export const BarParentSpan1=styled.span`
    width: 90%;
   ${BarParentSpan}
`
export const BarParentSpan2=styled.span`
${BarParentSpan};
    width: 90%;
`
export const BarParentSpan3=styled.span`
    width: 80%;
    ${BarParentSpan}
`

export const ProfileTitle=styled.h2 `
font-size: 40px; 
margin-bottom: 20px
`
export const SkillsTitle=styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

export const ProfileTitleSpan=styled.span `
font-weight: normal;
`
export const SkillsTitlespan=styled.span `
    font-weight: normal;
`
