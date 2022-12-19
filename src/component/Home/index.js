import React from 'react';
import {
    HomeTag,
    Home_information,
    Home_info,
    Home_description,
    Description_span,
    Home_btn,
    Home_title,
} from "./style.js";
const Home=()=> {
    return (
    <HomeTag>
        <div className="container">
                <Home_information>
                    <Home_title>AbdEl-Rahman Rizq</Home_title>
                    <Home_info>Front-End Developer</Home_info>
                    <Home_description>
                        I'm a professional <Description_span>UI Designer</Description_span> and <Description_span>Front-End Developer</Description_span> creating modern and responsive designs to Web and Mobile. Let us work together. Thank you. 
                    </Home_description>
                    <Home_btn>Let's Begin</Home_btn>
                </Home_information>
            </div>
    </HomeTag>
    );
  
}

export default Home;
