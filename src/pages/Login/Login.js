import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { googleSignIn, handleUserLogin } = useAuth();

    const location = useLocation();
    // console.log('came from', location.state?.from);

    const history = useHistory();
    const redirect_uri = location.state?.from || "/home"

    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })

    }






    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = (e) => {
        handleUserLogin(email, password);
        e.preventDefault();
    };

    return (
        <div className="login">
            <div className="pt-5">
                <Form className="contact-form">
                    <h2 className="mb-5 text-center">Login</h2>

                    <input
                        onChange={hanldeEmail}
                        className="mt-2 p-2"
                        type="email"
                        placeholder="Email"
                    />
                    <br />
                    <input
                        onChange={hanldePassword}
                        className="mt-2 p-2"
                        type="password"
                        placeholder="Password"
                    />
                    <br />


                    <Button onClick={handleLogin} className="login-btn" variant="primary">Login</Button>
                    <div className="text-center pt-3">
                        <Button className="google-btn" onClick={handleGoogleLogIn}><i class="fab fa-google"></i> Sign in with Google</Button>
                        <p className="pt-3">New user? <Link to="/register">Create an account</Link></p>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Login;