import { Link } from "react-router-dom";
import Title from "../components/Title";

function Portfolio({ show }) {
  // Define an array of portfolio items
  const portfolioItems = [
    {
      name: "App 1",
      category: "filter-app",
      image: "assets/img/portfolio/portfolio-1.jpg",
    },
    {
      name: "Web 3",
      category: "filter-web",
      image: "assets/img/portfolio/portfolio-2.jpg",
    },
  ];

  return (
    <>
      {show !== false && <Title title="Portfolio" />}
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}
              >
                <div className="portfolio-wrap">
                  <img src={item.image} className="img-fluid" alt={item.name} />
                  <div className="portfolio-info">
                    <h4>{item.name}</h4>
                    <p>{item.category}</p>
                    <div className="portfolio-links">
                      <a
                        href={item.image}
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title={item.name}
                      >
                        <i className="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
