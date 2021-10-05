import './Team.css'
import React from 'react';
import image1 from '../../images/img-4.jpg'

const Team = () => {
    return (
        <div className="row m-5 d-flex d-flex justify-content-center pb-5">
            <h1 className="name mb-4">Our Teams</h1>
            <img className="img-fluid team-img mb-3" src={image1} alt="" />
        </div>
    );
};

export default Team;