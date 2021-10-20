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


    }, [])

    useEffect(() => {
        if (services.length > 0) {
            const singleService = services.find(ss => ss.id == serviceId);
            setAppoinment(singleService);

            console.log(singleService);
        }

    }, [services, serviceId, appoinment])

    return (
        // <div className="appoinment-service d-flex">
        //     <h3>This is appoinment {serviceId}</h3>
        //     <h3>This is  {appoinment?.name}</h3>

        // </div>
        <div className="conteiner">
            <div className="row pt-4">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <div className="single-service">
                        <div>
                            <img src={appoinment?.img} alt="" />
                            <h3 className="pb-3">{appoinment?.name}</h3>
                            <p>{appoinment?.description}</p>
                        </div>
                        <div className="social-link">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-youtube-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <h4 className="pt-3">Contact: +880123456789</h4>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
};

export default Appoinment;