const SignUp = () => {
    return (
        <div>
            <h1>Sign up with your email & password</h1>
            <form onSubmit={() => {}}>
                <label>Display Name</label>
                <input type='text' required/>

                <label>Email</label>
                <input type='email' required/>

                <label>Password</label>
                <input type='password' required/>

                <label>Confirm Password</label>
                <input type='password' required/>
                <button type='submit'></button>
            </form>
        </div>
    )
}