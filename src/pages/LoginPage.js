import React from 'react';
import LoginForm from "../components/login_form/LoginForm";
import SectionTitle from "../components/section_title/SectionTitle";

function LoginPage(props) {

    const onsubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <SectionTitle>Log in Form</SectionTitle>
            <LoginForm onSubmitForm={onsubmit}/>
        </>
    );
}

export default LoginPage;