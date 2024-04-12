import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li>
            <Link className="nav-link scrollto active" to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto" to={"/services"}>
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-link scrollto " to={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          

          <li className="dropdown">
            <a href="#">
              <span>Pages</span> <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              <li>
                <Link to={"/team"}>Team</Link>
              
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              
              </li>
              <li>
                <Link to={"/faq"}>Faqs</Link>
              
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/contact"} className="nav-link scrollto" href="#contact">
              Contact
            </Link>
          </li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </>
  );
}

export default Navbar;
