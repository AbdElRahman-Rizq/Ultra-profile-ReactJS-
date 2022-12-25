import React, { useEffect,useState } from 'react';
import axios from 'axios';
import {
    Part,
    PartDesc,
    PartTitle,
    WorkTitle,
    WorkSection,
    Icon,
    Line
    
 } from "./style.js";
 const Work=()=> {
        let[Works,setWorks]=useState([])
    
 useEffect(()=> {
     axios.get('JS/data.json').then(res=>setWorks(res.data.works))
    },[])

    
    return (
        <WorkSection id='Work'>
        <div className="container">
            <WorkTitle>My Work</WorkTitle>
           {Works && Works.map((WorksItem)=>
        
        <Part key={WorksItem.id} id={WorksItem.id}>
            <Icon className={WorksItem.icon_name}></Icon>
            <PartTitle>{WorksItem.title}</PartTitle>
            <Line/>
            <PartDesc>
              {WorksItem.body}
            </PartDesc>
        </Part>
    
)}
            
        </div>
    </WorkSection>
    
    )
  
}

export default Work;
