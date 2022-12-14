import styled from "styled-components";
export const PortfolioSection= styled.div`
background: #f8f8f8;
padding-top: 20px; 
overflow: hidden;
`
export const Title= styled.div`
    text-align: center;
    font-size: 35px;
`
export const TitleSpan= styled.span`
    font-weight: normal
    `
    export const List= styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
    .active{
        background:#eb5424;
        color:#fff
    }
    `
    export const ListItem= styled.li`
    cursor:pointer;
    display: inline-block;
    width: 100px;
    padding: 10px;
    &:hover{
        background:#fff;
        color:#eb5424;
    }
    @media (max-width:575px) {
            display: block;
            margin: auto
        }
`
export const ImageBox= styled.div`
    width: 25%;
    float: left;
    font-size: 0;
    position: relative;
    &:hover > p {
        opacity: 1
        }
    @media (max-width:575px) {
    width: 100%;
}
`
export const Img= styled.img `
    width: 100%;
    height:300px;
    @media (max-width:575px) {
       height:270px
    }
`
export const Overlay= styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    margin: 0;
`
export const OverlaySpan= styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: rgba(36, 36, 36, 0.747);
    display: block;
    padding: 10px 20px;
    cursor: pointer;
    /* border: 1px solid #030000; */
    border-radius:2px;
    color:#fff;
    
`


