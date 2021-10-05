import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, img, Price, By, Rating } = props.service
    return (
        <div className="col-md-3">
            <div className="card m-4 bg-secondary">
                <img className="card-img-top card-image" src={img} alt="" />
                <div className="card-body">
                    <h3 className="card-title">
                        {name}
                    </h3>
                    <p>Created By: {By} <br /> <small> Rating: {Rating}</small></p>
                    <h5 className="card-text pb-3"> Price: {Price}$
                    </h5>
                    <button className="about-btn">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;