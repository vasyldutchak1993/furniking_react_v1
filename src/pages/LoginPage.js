import React from 'react';
import LoginForm from "../components/login_form/LoginForm";

function LoginPage(props) {

    const onsubmit = (values) => {
        console.log(values)
    }

    return (
        <>
            <LoginForm onSubmit={onsubmit}/>
        </>
    );
}

export default LoginPage;