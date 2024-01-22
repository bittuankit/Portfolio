import React from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";
import myImage from "../assets/images/ankit.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Home = (props) => {
  return (
    <div className="container">
      <header>
        <Navbar
          mode={props.mode}
          toggleMode={props.toggleMode}
          icon={props.icon}
        />
      </header>
      <main className="home-main">
        <div className="main-items">
          <div className="left">
            <h1 className="firstname">Ankit</h1>
            <div className="btn">
              <button>Hire</button>
              <button>Contact</button>
            </div>
          </div>
          <img src={myImage} alt="ankit-image" />
          <h1 className="lastname">Gupta</h1>
        </div>
        <div className="footer">
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
        </div>
      </main>
      <div className="circle"></div>
    </div>
  );
};

export default Home;
