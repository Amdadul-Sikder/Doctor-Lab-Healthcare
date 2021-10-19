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

    // console.log(email, password);

    const handleRegister = () => {
        handleUserRegister(email, password);
    };

    return (
        <div className="register">
            <div className="pt-4">
                <Form className="contact-form">
                    <h2 className="mb-3 text-center">Register</h2>
                    {/* <Form.Group className="mb-2">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label> Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group> */}
                    <Form.Group className="mb-2">
                        <Form.Label onChange={hanldeEmail}>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label onChange={hanldePassword}>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-2">
                        <Form.Label onChange={hanldePassword}> Confirm Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group> */}
                    <Button onClick={handleRegister} className="register-btn" variant="primary">Register</Button>
                    <div className="text-center pt-3">
                        <Button onClick={googleSignIn}><i class="fab fa-google"></i> Sign in with Google</Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Register;