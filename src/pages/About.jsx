import Counts from "../components/Counts";
import Title from "../components/Title";

function About() {
  return (
    <>
      <Title title="About" />
      <section id="tabs" className="tabs">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4>
                Take your business to the next level with top-quality software
                development agency
              </h4>

              <h5>Who We Are:</h5>
              <p>
                At our core, we re a top-quality software development agency
                driven by innovation and excellence. With a dedicated team of
                experts, we specialize in crafting custom software solutions
                tailored to meet the unique needs of your business.
              </p>

              <h5>What We Do:</h5>
              <p>
                Our mission is to take your business to the next level through
                the power of custom software. We understand that every business
                is different, which is why we offer personalized solutions
                designed to streamline internal processes, optimize key
                operations, and create cutting-edge customer-facing platforms.
                Whether youre looking to automate tasks, enhance efficiency, or
                improve customer engagement, our bespoke digital solutions are
                the missing link in propelling your business forward.
              </p>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img src="assets/img/tabs-1.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      <Counts/>
    </>
  );
}

export default About;
