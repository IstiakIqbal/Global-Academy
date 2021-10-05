import React from "react";
import { Link } from "react-router-dom";
import globe from "../..//images/logo/Globe.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="mt-5">
            <img className="globe img-fluid" src={globe} alt="" />
            <h1 className="title">
              Welcome to Global Academy
            </h1>
            <p className="text-white text-center mt-3">
              A unique school for Year 10 – Year 13 students specialising in the fast-paced and exciting creative media industry.
            </p>
            <Link to="/about">
              <button className="mt-5 about-btn">About Us</button>
            </Link>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
