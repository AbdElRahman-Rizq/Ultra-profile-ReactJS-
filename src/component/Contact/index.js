import React from 'react';
import"./style.js"
import { ContactSection, ContactTitle, TitleSpan,Form, NameAndEmailSection, Input, TextArea, Submit } from './style.js';
const Contact=()=> {

    return (
        <ContactSection>
        <div className="container">
            <ContactTitle><TitleSpan>Drop </TitleSpan>Me A line</ContactTitle>
            <Form action="">
                <NameAndEmailSection>
                    <Input type="text" placeholder="Your Name"/>
                    <Input type="email" placeholder="Your Email"/>
                </NameAndEmailSection>
                <Input type="text" className="sub" placeholder="Your Subject"/>
                <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                <Submit type="submit" value="Send Message"/>
            </Form>
        </div>
    </ContactSection>
    );
  
}

export default Contact;
