import { useRef, useState, useEffect } from "react";
import axios from '../../api/axios'
import { FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Login() {
    const userRef = useRef();
    const pwdRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(user.length > 0);
    }, [user])
    
    useEffect(() => {
        setValidPwd(pwd.length > 0);
    }, [pwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = user.length > 0;
        const v2 = pwd.length > 0;
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post('/login',
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            if (response.status === 200) {
                setSuccess(true);
                setErrMsg('Login Successful');
            }
        } catch (err) {
            setErrMsg(err.response.data);
        }
    }
    
    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <Link to='/'>Home</Link>
                    </p>
                </section>
            ) : (
                <section className='login-section'>
                    <div className='login-container'>
                        <h1 className='login-title'>Login</h1>   
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <fieldset className='login-fieldset'>
                                <legend>
                                    Username
                                    <FaCheckCircle className={validName ? "valid" : "hide"} />
                                    <FaTimesCircle className={validName || !user ? "hide" : "invalid"} />
                                </legend>
                                <input
                                    type='text'
                                    placeholder='Username'
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                />
                                <p id="uidnote" className={userFocus ? "show" : "offscreen"}>
                                    <FaInfoCircle /> Username must be at least 5 characters long
                                </p>
                            </fieldset>
                            <fieldset className='login-fieldset'>
                                <legend>
                                    Password
                                    <FaCheckCircle className={validPwd ? "valid" : "hide"} />
                                    <FaTimesCircle className={validPwd || !pwd ? "hide" : "invalid"} />
                                </legend>
                                <input 
                                    type='password'
                                    placeholder='Password'
                                    ref={pwdRef}
                                    value={pwd}
                                    onChange={(e) => setPwd(e.target.value)}
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                />
                                <p className={pwdFocus ? "show" : "offscreen"}>
                                    <FaInfoCircle /> Password must be at least 8 characters long
                                </p>
                            </fieldset>
                            <button disabled={!validName || !validPwd ? true : false} type='submit'>
                                Login
                            </button>
                        </form>
                        <p className='login-register'>
                            Need an account? <Link to='/register'>Register</Link>
                        </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login