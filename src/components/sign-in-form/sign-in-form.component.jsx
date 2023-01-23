import { 
    useState, 
    Fragment 
} from "react";

import  { Outlet, Link } from 'react-router-dom';

import FormInput from '../form-input/form-input.component';
import Button from "../button/button.component";

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(
                email,
                password
            );
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                  alert('incorrect password');
                  break;
                case 'auth/user-not-found':
                  alert('User not found');
                  break;
                default:
                  console.log(error);
              }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <Fragment>
            <div className="sign-up-container">
                <h2>Already have an account account?</h2>
                <span>Sign in with your email & password</span>
                <form onSubmit={handleSubmit}>
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
                    <div className="buttons-container">
                        <Button type='submit'>Sign In</Button>
                        <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                        Google Sign In
                        </Button>
                    </div>     
                </form>

                <div className="screen_background">
                    <span className="screen_background_shape screen_background_shape4"></span>
                    <span className="screen_background_shape screen_background_shape3"></span>
                    <span className="screen_background_shape screen_background_shape2"></span>
                    <span className="screen_background_shape screen_background_shape1"></span>
                </div>

                
                <Outlet/>
            </div>
        </Fragment>
    );
};


export default SignInForm;