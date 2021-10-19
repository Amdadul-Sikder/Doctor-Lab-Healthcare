import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import "./Register.css"

const Register = () => {
    const { handleUserRegister, googleSignIn } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };


    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = (e) => {
        handleUserRegister(email, password);
        e.preventDefault();
    };

    return (
        <div className="register">

            <div className="pt-4">
                <Form className="contact-form">
                    <h2 className="mb-3 text-center">Register</h2>
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

                    <Button type="submit" onClick={handleRegister} className="register-btn" variant="primary">Register</Button>
                    <div className="text-center pt-3">
                        <Button onClick={googleSignIn}><i class="fab fa-google"></i> Sign in with Google</Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Register;