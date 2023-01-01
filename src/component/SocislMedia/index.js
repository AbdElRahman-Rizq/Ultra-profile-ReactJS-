import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AllSocial, Icon, Info, Infospan, SocialSection } from './style.js';
const SocialMedia=()=> {
    let[Social,SetSocial] =useState([]);
    useEffect(()=>{
        axios.get("JS/data.json").then(res=>SetSocial(res.data.social))
    },[])
    return (
   
        <SocialSection id='SocialMedia'>
            {Social&&Social.map((Items)=>

                <AllSocial key={Items.id} id={Items.id}>
               <a href={Items.link}> <Icon className={Items.icon}></Icon></a>
                <Info>
                    <Infospan>{Items.title}</Infospan>
                    <Infospan itemProp='info2'>{Items.body}</Infospan>
                </Info>
            </AllSocial>
            )}
            
        </SocialSection>
    );
  
}

export default SocialMedia;
