import { useRef } from "react";
import { AboutMe } from "../../constants";
import gsap from "gsap";

const About = () => {
  const overlayRef = useRef(null);

  const handleMouseMove = (e) => {
    const overlay = overlayRef.current;
    const rect = overlay.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(overlay, {
      clipPath: `circle(120px at ${x}px ${y}px)`,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  };

  return (
    <div className="about">
      <div className="image">
        <img src="./img/About Me.svg" alt="About Me SVG"></img>
      </div>
      <div className="content" onMouseMove={handleMouseMove}>
        <h2>Ankit Gupta</h2>
        <h4>India📍</h4>
        {AboutMe.map((about, idx) => (
          <p style={{ margin: "10px 0" }} key={idx}>
            {about.text}
          </p>
        ))}
      </div>
      <div className="overlay" ref={overlayRef} onMouseMove={handleMouseMove}>
        <h2>Ankit Gupta</h2>
        <h4>India📍</h4>
        {AboutMe.map((about, idx) => (
          <p style={{ margin: "10px 0" }} key={idx}>
            {about.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;
