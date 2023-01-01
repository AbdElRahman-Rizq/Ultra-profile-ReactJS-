import React from 'react';
import{ AboutSection,AboutInfo, AboutTitle, AboutDirector, AboutTitleSpan, AboutDesc }from"./style.js";
function About() {

    return (
        <AboutSection id="About">
        <div className="container">
            <AboutInfo>
                <AboutTitle><AboutTitleSpan>This is</AboutTitleSpan> Me</AboutTitle>
                <AboutDirector>Front-End developer</AboutDirector>
                <AboutDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutDesc>
                <AboutDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </AboutDesc>
            </AboutInfo>
        </div>
    </AboutSection>
    );

}

export default About;
