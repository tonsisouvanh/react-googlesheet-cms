import React, { useState } from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <div className="nav-container">
        <i
          onClick={handleClick}
          class={click ? "fas fa-align-justify" : "fas fa-times"}
        ></i>
        <h1 className="logo">LOGO</h1>
        <ul className="nav-active nav-menu">
          <li className="nav-link">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/students-list-page">
              Students
            </Link>
          </li>
          <li className="nav-link">
            <Link to="/task-page">
              Task
            </Link>
          </li>
        </ul>
        <button className="btn-active about-btn">About</button>

        <div
          className={`${click ? "" : "mobile-nav-active"} mobile-nav-container`}
        >
          <ul className="mobile-nav-menu">
            <li className="mobile-nav-link">
              <a href="">Home</a>
            </li>
            <li className="mobile-nav-link">
              <a href="">Dormitory</a>
            </li>
            <li className="mobile-nav-link">
              <a href="">Projects</a>
            </li>
          </ul>
          <button className="mobile-btn">About</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
