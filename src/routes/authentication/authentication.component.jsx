import SignUp from '../../components/sign-up/sign-up.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

import './authentication.styles.scss';

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignInForm />
            <SignUp />

            <div className="screen_background">
                <span className="screen_background_shape screen_background_shape4"></span>
                <span className="screen_background_shape screen_background_shape3"></span>
                <span className="screen_background_shape screen_background_shape2"></span>
                <span className="screen_background_shape screen_background_shape1"></span>
            </div>
        </div>
    );
};

export default Authentication;