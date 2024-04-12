import { Link } from "react-router-dom";

function Slider() {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container-fluid text-center"
        data-aos="zoom-out"
        data-aos-delay="100"
      >
        <div className="row">
          <div className="col-xl-8 col-lg-6 col-xs-12 col-sm-12 col-md-6 align-items-center mx-auto text-center">
            <h1>Crafting Excellence</h1>
            <h2>
              Expertise in Custom Software Development, Our goal is to craft the
              optimal initial version of your product, ensuring it resonates in
              the market and validates your idea
            </h2>

            <Link to={"/contact"} className="btn-get-started scrollto">
              Get Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
