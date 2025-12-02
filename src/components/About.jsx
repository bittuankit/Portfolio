import { useRef } from "react";
import { AboutMe } from "../../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);
let animation;

const About = () => {
  useGSAP(() => {
    const aboutMe = new SplitText(".content p", { type: "chars, words" });
    const aboutMe2 = new SplitText(".overlay p", { type: "chars, words" });

    animation && animation.revert();
    animation = gsap.from(aboutMe.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.15,
    });

    animation = gsap.from(aboutMe2.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.15,
    });
  });

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
