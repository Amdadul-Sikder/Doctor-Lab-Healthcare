import React from 'react';
import { Button, Form } from 'react-bootstrap';
import "./Register.css"

const Register = () => {
    return (
        <div className="register">
            <div className="pt-4">
                <Form className="contact-form">
                    <h2 className="mb-3 text-center">Register</h2>
                    <Form.Group className="mb-2">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label> Last Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    <Button className="register-btn" variant="primary">Register</Button>
                    <div className="text-center pt-3">
                        <Button><i class="fab fa-google"></i> Sign in with Google</Button>
                    </div>
                </Form>

            </div>
        </div>
    );
};

export default Register;