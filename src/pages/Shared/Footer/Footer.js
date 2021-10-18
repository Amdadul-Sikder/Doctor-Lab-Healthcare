import React from 'react';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>Doctor Lab</h1>
                    </div>
                    <div className="col-lg-4">
                        <h3>About Us</h3>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth</p>
                    </div>
                    <div className="col-lg-4">
                        <h2>+880123456789</h2>
                        <h5>contact@gmail.com</h5>
                        <HashLink to="/contact#contact"><Button className="mt-3" variant="light">Contact Us</Button></HashLink>
                    </div>
                    <hr />
                    <p>Copyright &copy; 2021</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;