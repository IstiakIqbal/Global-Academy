import React from 'react';
import './Error.css'
import doge from '../../images/doge.png'

const Error = () => {
    return (
        <div className="error">
            <img className="doge img-fluid" src={doge} alt="" />
            <h1>An Unexpected Error Has Occured</h1>
            <h3>Much Awkward!</h3> <br />
            <p>Something has gone wrong. It's possible the internet is broken. We are looking into it.
            </p>
        </div>
    );
};

export default Error;