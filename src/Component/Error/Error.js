import React from 'react';
import './Error.css'

const Error = () => {
    return (
        <div className="error">
            <h1>Error 404</h1>
            <h3>The requested URL was not found on this server.</h3> <br />
            <p>The Page you are looking for might have been removed had its name changed or is temporarily unavailable. <br />
                <small> Additionally, a 404 Not Found error was encountered while trying to use an ErrorDocument to handle the request </small>
            </p>
        </div>
    );
};

export default Error;