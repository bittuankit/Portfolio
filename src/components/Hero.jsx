import { Roles, socialLinks } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Hero = () => {
  useGSAP(() => {
    const firstnameSplit = new SplitText(".firstname", {
      type: "chars, words",
    });
    const lastnameSplit = new SplitText(".lastname p", {
      type: "chars, words",
    });

    gsap.from(firstnameSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(lastnameSplit.chars, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.03,
    });

    gsap.from(".icons a", {
      opacity: 0,
      x: 100,
      duration: 1,
      rotate: "360deg",
      ease: "expo.out",
      stagger: 0.2,
      delay: 1.8,
    });

    function animateRoles() {
      let index = 0;

      function showNextRole() {
        document.querySelector(".roles").textContent = Roles[index].title;

        const split = new SplitText(".roles", { type: "chars" });

        gsap.from(split.chars, {
          opacity: 0,
          xPercent: -120,
          duration: 1.2,
          ease: "expo.out",
          stagger: 0.05,
        });

        index = (index + 1) % Roles.length;

        setTimeout(showNextRole, 2000);
      }

      showNextRole();
    }

    animateRoles();
  }, []);

  return (
    <div className="hero">
      <div className="left">
        <h1 className="firstname">
          <h3>Hello!</h3>
          Ankit
        </h1>
        <h1 className="lastname">
          Gupta
          <p>
            FullStack{" "}
            <span
              className="roles"
              style={{
                textTransform: "capitalize",
                width: "140px",
              }}
            ></span>
          </p>
        </h1>
      </div>

      <button className="btn-cv">Download CV 📋</button>

      <a href="#contact" className="btn-hire">
        Hire Me
      </a>

      <img src="./img/Ankit Gupta.png" alt="me" />

      <div className="right">
        <div className="icons">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              dangerouslySetInnerHTML={{ __html: link.icon }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
