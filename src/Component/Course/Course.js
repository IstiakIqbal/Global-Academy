import React from 'react';

const Course = (props) => {
  const { name, img, Price, By, Rating } = props.course;

  return (
    <div className="col-4">
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h5>Created By {By}</h5>
          <p className="card-text">Rating: {Rating}</p>
          <h3>Price: {Price}$</h3>
          <button>Add to cart</button>
        </div>
      </div>

    </div>
  );
};

export default Course;