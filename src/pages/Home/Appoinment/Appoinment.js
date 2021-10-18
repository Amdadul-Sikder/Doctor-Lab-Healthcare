import React from 'react';
import { useParams } from 'react-router';

const Appoinment = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>This is appoinment {serviceId}</h3>

        </div>
    );
};

export default Appoinment;