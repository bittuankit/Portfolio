import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Contact from "./pages/contact";
import { IoMoon, IoSunny } from "react-icons/io5";

const App = () => {
  const [mode, setMode] = useState("dark");
  const [icon, setIcon] = useState(<IoSunny />);
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setIcon(<IoMoon />);
    } else {
      setMode("dark");
      setIcon(<IoSunny />);
    }
  };
  return (
    <div className={`main bg-${mode}`}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home mode={mode} toggleMode={toggleMode} icon={icon} />}
          />
          <Route
            path="/services"
            element={
              <Service mode={mode} toggleMode={toggleMode} icon={icon} />
            }
          />
          <Route
            path="/about"
            element={<About mode={mode} toggleMode={toggleMode} icon={icon} />}
          />
          <Route
            path="/contact"
            element={
              <Contact mode={mode} toggleMode={toggleMode} icon={icon} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
