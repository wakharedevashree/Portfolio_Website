import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  const handleSetMenu = (menuName) => {
    setMenu(menuName);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span>P</span>ortfolio
      </div>

      <ul className="nav-menu">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetMenu("home")}
          >
            Home
          </Link>
          {menu === "home" && <div className="underline"></div>}
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetMenu("about")}
          >
            About Me
          </Link>
          {menu === "about" && <div className="underline"></div>}
        </li>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetMenu("skills")}
          >
            Skills
          </Link>
          {menu === "skills" && <div className="underline"></div>}
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetMenu("projects")}
          >
            Projects
          </Link>
          {menu === "projects" && <div className="underline"></div>}
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onSetActive={() => handleSetMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" && <div className="underline"></div>}
        </li>
      </ul>

      
    </nav>
  );
};

export default Navbar;
