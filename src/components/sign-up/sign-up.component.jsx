import { useState } from "react";

import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import './sign-up.styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );
                await createUserDocumentFromAuth(user, { displayName });
                resetFormFields();
                
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Failed! Email already in use.', error);
            } else {
                console.log('error creating user', error);
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div className="sign-up-container">
            <h2>Create account?</h2>
            <span>Sign up here</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label="Display Name"
                type='text'
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
                />

                <FormInput
                label="Email"
                type='email'
                required
                onChange={handleChange}
                name="email"
                value={email}
                />

                <FormInput
                label="Password"
                type='password'
                required
                onChange={handleChange}
                name="password"
                value={password}
                />

                <FormInput
                label="Confirm Password"
                type='password'
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                />
                <Button type='submit'> 
                Sign Up
                </Button>
            </form>
        </div>
    );
};


export default SignUp;