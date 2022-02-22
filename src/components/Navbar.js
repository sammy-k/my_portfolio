import "./componentStyles/Navbar.css";

const Navbar = () => {
  return (
    <header className="header center">
      <h3 className="header-logo">SK.</h3>
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">
            <a href="#projects" className="link-nav">
              projects
            </a>
          </li>

          <li className="nav-list-item">
            <a href="#skills" className="link-nav">
              skills
            </a>
          </li>
          <li className="nav-list-item">
            <a href="#contact" className="link-nav">
              contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
