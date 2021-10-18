import React from 'react';
import { Accordion } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://image.freepik.com/free-photo/successful-medical-team_329181-9252.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <h2>About <span>Doctor Lab</span></h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div className="accordion">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Why Choose Us</Accordion.Header>
                                        <Accordion.Body>
                                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What We Do?</Accordion.Header>
                                        <Accordion.Body>
                                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Offer Services</Accordion.Header>
                                        <Accordion.Body>
                                            One of the most helpful behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;