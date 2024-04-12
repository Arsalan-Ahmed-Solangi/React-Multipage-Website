import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to={"/"}>SmartTech</Link>
            <span>.</span>
          </h1>

          <Navbar />

          <Link to={"/about"} className="get-started-btn scrollto">
            Book a demo
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
