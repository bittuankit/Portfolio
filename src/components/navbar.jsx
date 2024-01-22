import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <Link className="item" to={"/"}>
          Home
        </Link>
        <Link className="item" to={"/services"}>
          Services
        </Link>
        <Link className="item" to={"/about"}>
          About
        </Link>
        <Link className="item" to={"/contact"}>
          Contact
        </Link>
      </div>
      <div className="nav-end">
        <button>Hire Me</button>
        <div onClick={props.toggleMode} className="theme-changer">
          {props.icon}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
