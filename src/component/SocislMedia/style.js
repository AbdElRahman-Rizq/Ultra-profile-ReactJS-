import styled from "styled-components";
export const SocialSection=styled.div`
    height: auto;
    overflow: hidden;
    width: 100%;
`
export const AllSocial=`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px
`
export const Facebook=styled.div`
    background: #3b5998;
    ${AllSocial}
`
export const Twitter=styled.div`
${AllSocial};
background: #498cbf;
`
export const Pinterest=styled.div`
background: #cc2127;
${AllSocial}
`
export const Icon=styled.i`
    width: 50px;
    height: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 25px;
`
export const Info=styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;
`
export const Infospan=styled.span`
    display: block;
    margin-bottom: 8px;
    font-weight:${props=>(props.itemProp==="info2"?"normal":"")}
`

