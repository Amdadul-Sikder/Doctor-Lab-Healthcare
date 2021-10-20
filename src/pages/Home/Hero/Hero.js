import React from 'react';
import { Button } from 'react-bootstrap';
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <h1>The Most Valuable Thing is Your Health</h1>
                            <p>Welcome to Doctor Lab Family Practice and the office of Dr. Albert Levy, board certified family medicine specialist and top doctor,  and his excellent team of healthcare providers. </p>
                            <Button variant="primary">Make an Apoinment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;