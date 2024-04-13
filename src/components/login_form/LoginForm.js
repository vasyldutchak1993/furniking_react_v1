import React from 'react';
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import {IoSend} from "react-icons/io5";


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password:Yup.string().min(5).max(16).required('min 5 max 16')
});

function LoginForm({onSubmit}) {
    return (
        <>
            <Formik initialValues={{
                email:'',
                password:''
            }}
                    onSubmit={(values,{ resetForm }) => {
                        // same shape as initial values
                        onSubmit(values)
                        resetForm()}}
                    validationSchema={SignupSchema}

            >

                {({ errors, touched }) => (
                    <Form className='sign_up_form'>
                        <div className={`input_container ${errors.message && touched.message ? 'error':''}`}>
                            <Field as="textarea" name="message" type="text" placeholder='Type your message'/>
                            {errors.message && touched.message ? <div className={`error_field`}>{errors.message}</div> : null}
                        </div>
                        <div className={`input_container ${errors.password && touched.password ? 'error':''}`}>
                            <Field as="textarea" name="message" type="text" placeholder='Type your message'/>
                            {errors.password && touched.password ? <div className={`error_field`}>{errors.password}</div> : null}
                        </div>
                        <div className="button_container">
                            <button className="submit_form_btn" type='submit'>
                                LOGIN<IoSend/>
                            </button>
                        </div>
                    </Form>
                )}

            </Formik>
        </>
    );
}

export default LoginForm;