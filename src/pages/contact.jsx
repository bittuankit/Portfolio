import React from "react";
import Navbar from "../components/navbar";

const Contact = (props) => {
  return (
    <div className="container">
      <header>
        <Navbar
          mode={props.mode}
          toggleMode={props.toggleMode}
          icon={props.icon}
        />
      </header>
      <main></main>
    </div>
  );
};

export default Contact;
