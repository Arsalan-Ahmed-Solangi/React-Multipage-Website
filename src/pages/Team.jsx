import { Link } from "react-router-dom";
import Title from "../components/Title";

function Team({ show }) {
  return (
    <>
      {show != false && <Title title="Team" />}

      <section id="team" className="team ">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link to={"/"}>
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link to={"/"}>
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link to={"/"}>
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <Link to={"/"}>
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-instagram"></i>
                    </Link>
                    <Link to={"/"}>
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
