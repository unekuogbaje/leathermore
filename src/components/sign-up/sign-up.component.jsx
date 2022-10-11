import { useState } from "react";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {};
    return (
        <div>
            <h1>Sign up with your email & password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' required onChange={handleChange} />

                <label>Email</label>
                <input type='email' required onChange={handleChange} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} />

                <label>Confirm Password</label>
                <input type='password' required onChange={handleChange} />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
};


export default SignUp;