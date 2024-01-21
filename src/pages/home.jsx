import React from "react";
import Navbar from "../components/navbar";
import "../styles/home.css";

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
        <div className="circle"></div>
        <h1>Ankit</h1>
      </main>
    </div>
  );
};

export default Home;
