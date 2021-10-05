import React from 'react';
import './Course.css'

const Course = (props) => {
  const { name, img, Price, By, Rating } = props.course;

  return (
    <div className="col-md-4">
      <div className="card m-4 bg-secondary">
        <img className="card-img-top card-image" src={img} alt="" />
        <div className="card-body">
          <h3 className="card-title">
            {name}
          </h3>
          <p>Created By: {By} <br /> <small> Rating: {Rating}</small></p>
          <h5 className="card-text pb-3"> Price: {Price}$
          </h5>
          <button className="mt-5 about-btn">Buy Now</button>
        </div>
      </div>
    </div>
  )
};

export default Course;