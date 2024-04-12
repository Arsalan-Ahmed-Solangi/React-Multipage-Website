import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>
                  SmartTech<span>.</span>
                </h3>
                <p>
                  A108 Adam Street <br />
                  Karachi
                  <br />
                  Pakistan <br />
                  <br />
                  <strong>Phone:</strong> +92-3043059147
                  <br />
                  <strong>Email:</strong> ahmedsolangi347@gmail.com
                  <br />
                </p>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>About us</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>Services</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>More Pages</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>Blog</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>Portfolio</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to={"/"}>Team</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>subscribe for out latest news and trends</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Arsalan Ahmed</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <Link
              to={"https://www.facebook.com/Arsolangi786"}
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              to={"https://www.instagram.com/solangi_arsalan/?hl=en"}
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </Link>

            <Link
              to={"https://www.linkedin.com/in/arsalan-ahmed-6b5536172/"}
              target="_blank"
              className="linkedin"
            >
              <i className="bx bxl-linkedin"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
