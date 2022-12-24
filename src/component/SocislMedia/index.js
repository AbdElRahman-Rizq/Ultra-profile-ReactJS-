import React from 'react';
import { Facebook, Icon, Info, Infospan, Pinterest, SocialSection, Twitter } from './style.js';
const SocialMedia=()=> {

    return (
   
        <SocialSection>
            <Facebook>
                <Icon className="fa fa-facebook fa-lg"></Icon>
                <Info>
                    <Infospan>Follow Me on</Infospan>
                    <Infospan itemProp='info2'>Social Facebook</Infospan>
                </Info>
            </Facebook>
            
            <Twitter>
                <Icon className="fa fa-twitter fa-lg"></Icon>
                <Info>
                    <Infospan>Tweet Me on</Infospan>
                    <Infospan itemProp='info2'>Social twitter</Infospan>
                </Info>
            </Twitter>
            
            <Pinterest>
                <Icon className="fa fa-pinterest fa-lg"></Icon>
                <Info>
                    <Infospan>Pin Me on</Infospan>
                    <Infospan itemProp='info2'>Social Pinterest</Infospan>
                </Info>
            </Pinterest>
        </SocialSection>
    );
  
}

export default SocialMedia;
