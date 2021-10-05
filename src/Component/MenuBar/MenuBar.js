
import "./MenuBar.css";
import logo from "../..//images/logo/baller-logo-3.png";
import { Link } from "react-router-dom";


const MenuBar = () => {

  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="logo-img d-flex">
              <img className="w-50 m-3" src={logo} alt="" />
              <div>
                <h1 className="name">Global Academy</h1>
              </div>
            </div>
          </div>
          <div className="col-md-10">
            <div className="menu-container ">
              <ul className="d-flex align-items-end justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>Courses</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About us</li>
                </Link>
                <Link to="/contact" className="items">
                  <li>Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
