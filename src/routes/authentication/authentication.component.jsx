import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { 
    auth,
    signInWithGooglePopup,
    // signInWithGoogleRedirect,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';

import SignUp from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    return (
        <div>
            <h1>Sign In Page</h1>
            <SignInForm />
            <SignUp />
        </div>
    );
};

export default Authentication;