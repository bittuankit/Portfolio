import { socialLinks } from "../../constants";

const Hero = () => {
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
            FullStack <span>Developer</span>
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
          {socialLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                dangerouslySetInnerHTML={{ __html: link.icon }}
              ></a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
