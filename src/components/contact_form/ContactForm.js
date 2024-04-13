import React from 'react';
import {ContactFormContainer} from "./contactForm.styled";
import {IoSend} from "react-icons/io5";
import * as Yup from 'yup';
import {Field, Form, Formik} from "formik";

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message:Yup.string()
        .min(50,'Too Short')
        .max(500,'Too Long')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
function ContactForm(props) {
       return (
        <ContactFormContainer>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message:''
                }}
                validationSchema={SignupSchema}
                onSubmit={(values,{ resetForm }) => {
                    // same shape as initial values
                    console.log(values);
                    resetForm()
                }}

            >
                {({ errors, touched }) => (
                    <Form className='contact_form'>
                        <div className={`input_container ${errors.firstName && touched.firstName ? 'error':''}`}>
                            <Field name="firstName" placeholder='Type your name'/>
                            {errors.firstName && touched.firstName ? (
                                <div className={`error_field`}>{errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className={`input_container ${errors.lastName && touched.lastName ? 'error':''}`}>
                            <Field name="lastName" placeholder='Type your last name'/>
                            {errors.lastName && touched.lastName ? (
                                <div className={`error_field`}>{errors.lastName}</div>
                            ) : null}
                        </div>
                        <div className={`input_container ${errors.email && touched.email ? 'error':''}`}>
                            <Field name="email" type="email" placeholder='Type your email'/>
                            {errors.email && touched.email ? <div className={`error_field`}>{errors.email}</div> : null}
                        </div>
                        <div className={`input_container ${errors.message && touched.message ? 'error':''}`}>
                            <Field as="textarea" name="message" type="text" placeholder='Type your message'/>
                            {errors.message && touched.message ? <div className={`error_field`}>{errors.message}</div> : null}
                        </div>
                        <div className="button_container">
                            <button className="submit_form_btn" type='submit'>
                                SEND<IoSend/>
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </ContactFormContainer>
    );
}

export default ContactForm;