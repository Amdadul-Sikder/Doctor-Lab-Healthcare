import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "./Appoinment.css"

const Appoinment = () => {
    const { serviceId } = useParams();

    const [services, setServices] = useState([]);
    const [appoinment, setAppoinment] = useState({})

    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
        // .then(data => console.log(data))
    }, [])

    useEffect(() => {
        const singleService = services.find(ss => ss.id === serviceId);
        setAppoinment(singleService);
        // console.log(singleService);

    }, [services])

    return (
        <div className="single-service d-flex">
            <h3>This is appoinment {serviceId}</h3>
            {/* <h3>This is  {appoinment?.name}</h3> */}

        </div>
    );
};

export default Appoinment;