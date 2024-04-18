import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
});

const handleSubmit = () => {
    console.log("clicking");
};

const LoginForm = ({ setIsLoginModalShow }) => {
    return (
        <>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="mb-4">
                            <label className="font-medium" htmlFor="email">Email*</label>
                            <Field className="h-[40px] px-3 border border-textColor rounded-md w-full mt-1" type="email" name="email" id="email" />
                            <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label className="font-medium" htmlFor="password">Password*</label>
                            <Field className="h-[40px] px-3 border border-textColor rounded-md w-full mt-1" type="password" name="password" id="password" />
                            <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
                        </div>

                        <div>
                            <button className="px-4 py-[6px] bg-primaryColor border border-primaryColor hover:bg-textColor text-white rounded-md font-medium capitalize">{isSubmitting ? "loading..." : "Login"}</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
