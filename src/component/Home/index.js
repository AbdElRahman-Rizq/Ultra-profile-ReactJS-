import React from 'react';
import {
    HomeTag,
    HomeInformation,
    HomeInfo,
    HomeDescription,
    DescriptionSpan,
    HomeBtn,
    HomeTitle,
} from "./style.js";
const Home=()=> {
    return (
    <HomeTag id="Home">
        <div className="container">
                <HomeInformation>
                    <HomeTitle>AbdEl-Rahman Rizq</HomeTitle>
                    <HomeInfo>Front-End Developer</HomeInfo>
                    <HomeDescription>
                        I'm a professional <DescriptionSpan>UI Designer</DescriptionSpan> and <DescriptionSpan>Front-End Developer</DescriptionSpan> creating modern and responsive designs to Web and Mobile.
                        <br/> Let us work together. Thank you. 
                    </HomeDescription>
                    <HomeBtn type='button' href="#Work">Let's Begin</HomeBtn>
                </HomeInformation>
            </div>
    </HomeTag>
    );
  
}

export default Home;
