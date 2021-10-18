import React from 'react';
import errorpage from "../../Images/404.png"
import "./NotFound.css"

const NotFound = () => {
    return (
        <div className="not-found">
            <img src={errorpage} alt="error img" />
        </div>
    );
};

export default NotFound;