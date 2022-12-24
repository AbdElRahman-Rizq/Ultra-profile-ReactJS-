import React from 'react';
import{ AboutSection,AboutInfo, AboutTitle, AboutDirector, AboutTitleSpan, AboutDesc, Anchor }from"./style.js";
function About() {

    return (
        <AboutSection>
        <div className="container">
            <AboutInfo>
                <AboutTitle><AboutTitleSpan>This is</AboutTitleSpan> Me</AboutTitle>
                <AboutDirector>Creative Director</AboutDirector>
                <AboutDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href='#'>explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
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
