
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbarsection = styled.div`
padding: 5px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000;
`
export const Logo = styled.div`
width: 50%;
float: left;
padding-top:1%
`
export const LogoText = styled.div`
font-size: 30px;
font-weight: bold
`
export const UlList = styled.ul`
float: left;
    padding:0;
    width: 50%;
    list-style: none;
`
export const ListItem = styled.li`
    display: inline-block;
    text-decoration: none;
`
export const LinkTag = styled(Link)`
display: block;
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
cursor: pointer;
&:hover{
    color: #eb5424;
`
export const Anchor = styled.a`
color: #222;
text-decoration: none;
padding: 10px 15px;
font-weight: bold;
cursor: pointer;
&:hover{
    color: #eb5424;
}`
