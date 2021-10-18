import React from 'react';
import { Button } from 'react-bootstrap';
import "./Service.css"

const Service = ({ service }) => {
    const { name, description, img } = service;
    return (
        <div id="services" className="col-lg-4">
            <div className="single-service">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <Button>Appoinment</Button>
            </div>
        </div>
    );
};

export default Service;