
function Login() {
    return (
        <section className='login-section'>
            <div className='login-container'>
                <h1 className='login-title'>Login</h1>   
                <form className='login-form'>
                    <fieldset className='login-fieldset'>
                        <legend>Username</legend>
                        <input type='text' placeholder='Username' />
                    </fieldset>
                    <fieldset className='login-fieldset'>
                        <legend>Password</legend>
                        <input type='password' placeholder='Password' />
                    </fieldset>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login