import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const { googleSignIn } = useAuth();
    return (
        <div className="login">
            <div className="pt-5">
                <Form className="contact-form">
                    <h2 className="mb-5 text-center">Login</h2>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Button className="login-btn" variant="primary">Login</Button>
                    <div className="text-center pt-3">
                        <Button onClick={googleSignIn}><i class="fab fa-google"></i> Sign in with Google</Button>
                        <p className="pt-3">New user? <Link to="/register">Create an account</Link></p>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Login;