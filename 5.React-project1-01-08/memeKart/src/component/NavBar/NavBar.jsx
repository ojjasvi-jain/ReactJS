import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nax-container">
      <img
        src="https://img.freepik.com/free-vector/abstract-icon-logo-design-template_474888-2824.jpg?size=626&ext=jpg&ga=GA1.1.800285213.1722261692&semt=ais_hybrid"
        className="nav-logo"
      ></img>

      <ul className="nav-links">
        <li> About </li>
        <li> Contact Us </li>
        <li>Detail </li>
        <li className="active">Cards</li>
      </ul>
    </nav>
  );
};

export default NavBar;
