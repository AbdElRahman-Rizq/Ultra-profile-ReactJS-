import styled from "styled-components";
export const ContactSection=styled.div`
padding: 85px 0;
text-align: center
`
export const ContactTitle=styled.h2`
    font-size: 60px;
    margin-bottom: 30px;
    @media (max-width:575px) {
            font-size: 40px
        }
`
export const TitleSpan=styled.span`
font-weight: normal
`
export const Form=styled.form`
width: 70%;
margin: auto;
@media (max-width:575px) {
    
    width: 90%
}
`
export const Input=styled.input`
    box-sizing: border-box;
    outline: 0;
    padding: 7px;
    margin-bottom: 10px;
    width:${props=>(props.placeholder==="your Name"||"your Email"?"49%":"")};
     width:${props=>(props.placeholder==="Your Subject"?"100%":"")};
    float:${props=>(props.type==="email"?"right":"left")};
    font-size: 15px;
    @media (max-width:575px) {
            width: 100%;
            text-align:center
        }
`
export const NameAndEmailSection=styled.div`
    overflow: hidden
`
export const TextArea=styled.textarea`
    font-size: 15px;
    width: 99.7%;
    outline: 0;
    background: #ccc;
    @media (max-width:575px) {
    
        width: 97.5%
    }
`
export const Submit=styled.input`
    width: 60%;
    margin-top:1%;
    background: #fff;
    border: 1px solid #ccc;
    color: #888;
    cursor: pointer;
    padding:10px 2px;
    &:hover{
    background: rgba(95, 94, 94, 0.795);
    color:#fff;
    }
    @media (max-width:575px) {
        width: 100%;
    }
`
