import { useGSAP } from "@gsap/react";
import { NavLinks } from "../../constants";
import gsap from "gsap";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "00000050",
        backgroundFilter: "blur(8px)",
        ease: "power1.inOut",
        duration: 1,
      }
    );

    gsap.fromTo(
      ".nav-item",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1 }
    );
  });

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          {NavLinks.map((link) => (
            <li key={link.id} className="nav-item">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className="side-nav"
        style={
          isSideNavOpen
            ? {
                position: "relative",
                left: "0%",
                width: "100%",
                height: "100%",
                background: "#00000038",
              }
            : { position: "relative", left: "-100%" }
        }
      >
        <ul className="side-nav-items">
          {NavLinks.map((link) => (
            <li key={link.id} className="side-nav-item">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="burger-icon" onClick={() => setIsSideNavOpen(true)}>
        <RxHamburgerMenu
          style={isSideNavOpen ? { display: "none" } : { display: "block" }}
        />
      </div>
      <div className="close-icon" onClick={() => setIsSideNavOpen(false)}>
        <IoClose
          style={isSideNavOpen ? { display: "block" } : { display: "none" }}
        />
      </div>
    </>
  );
};

export default Header;
