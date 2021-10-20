import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = ({ service }) => {
    const { id, name, description, img } = service;
    return (
        <div id="services" className="col-lg-4">
            <div className="single-service">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={`/appoinment/${id}`}>
                    <Button className="appoinment-btn mt-3">Appoinment</Button>
                </Link>
            </div>
        </div>
    );
};

export default Service;