import React from 'react';
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {IoSend} from "react-icons/io5";
import {LoginFormStyled} from "./loginForm.styled";


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(5).max(16).required('min 5 max 16')
});

const INITIAL_STATE = {
    email: '',
    password: ''
}

function LoginForm({onSubmitForm}) {
    return (
        <LoginFormStyled>
            <Formik initialValues={INITIAL_STATE}
                    onSubmit={(values, {resetForm, ...rest}) => {
                        // same shape as initial values
                        onSubmitForm(values)
                        resetForm()
                    }}
                    validationSchema={SignupSchema}
            >
                {({errors, touched}) => (
                    <Form className='sign_up_form'>
                        <div className={`input_container ${errors.email && touched.email ? 'error' : ''}`}>
                            <Field name="email" type="text" placeholder='Type your email'/>
                            {errors.email && touched.email ? <div className={`error_field`}>{errors.email}</div> : null}
                        </div>
                        <div className={`input_container ${errors.password && touched.password ? 'error' : ''}`}>
                            <Field name="password" type="password" placeholder='Type your password'/>
                            {errors.password && touched.password ?
                                <div className={`error_field`}>{errors.password}</div> : null}
                        </div>
                        <div className="button_container">
                            <button className="submit_form_btn" type='submit'>
                                LOGIN<IoSend/>
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </LoginFormStyled>
    );
}

export default LoginForm;