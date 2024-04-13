import React from 'react';
import SectionTitle from "../components/section_title/SectionTitle";
import ContactForm from "../components/contact_form/ContactForm";
import {FlexContainer} from "../components/containers/containers.styled";

function ContactPage(props) {
    return (
        <>
            <SectionTitle>Contact us</SectionTitle>
            <FlexContainer className='contact_flex'>
                <ContactForm/>
                <iframe
                    className='bordered'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21234.541941581905!2d18.07880522099052!3d48.29674009227935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3efddce92a83%3A0xe57854eebfaab9de!2zxb1lbGV6bmnEjW7DoSBzdGFuaWNh!5e0!3m2!1suk!2ssk!4v1711965105423!5m2!1suk!2ssk"
                    width="600" height="450"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </FlexContainer>
        </>
    );
}

export default ContactPage;