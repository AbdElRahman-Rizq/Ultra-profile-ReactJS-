import styled from "styled-components";
export const SocialSection=styled.div`
    height: auto;
    overflow: hidden;
    width: 100%;
`
export const AllSocial=styled.div`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    padding: 100px 0 100px 60px;
    background:${props=>(props.id===1?"#3b5998":"")};
    background:${props=>(props.id===2?"#0e76a8":"")};
    background:${props=>(props.id===3?"#498cbf":"")};
    @media (max-width: 767px) {
    padding: 50px 0 50px 60px;
    width:100%; 
         }
`

export const Icon=styled.i`
    width: 50px;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
    margin-top: 5px;
    cursor:pointer;
    @media (max-width: 767px) {
        margin-top:0;
         }
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