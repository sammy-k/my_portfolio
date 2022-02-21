import { projects, skills, contact } from "../portfolio";
import "./componentStyles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <h3>SK.</h3>
      <nav>
        <ul className="nav__list">
          {projects.length ? (
            <li className="nav__list-item">
              <a href="#projects" className="link link--nav">
                Projects
              </a>
            </li>
          ) : null}

          {skills.length ? (
            <li className="nav__list-item">
              <a href="#skills" className="link link--nav">
                Skills
              </a>
            </li>
          ) : null}

          {contact.email ? (
            <li className="nav__list-item">
              <a href="#contact" className="link link--nav">
                Contact
              </a>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
