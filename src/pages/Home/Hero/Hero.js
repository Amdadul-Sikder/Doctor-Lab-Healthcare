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
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                            <Button variant="primary">Make an Apoinment</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;