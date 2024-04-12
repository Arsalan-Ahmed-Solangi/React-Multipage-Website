import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { useState } from "react";
import Title from "../components/Title";

const TestimonialsSlider = ({ show }) => {
  // Testimonials data
  const testimonials = [
    {
      name: "Saul Goodman",
      position: "CEO & Founder",
      image: "assets/img/testimonials/testimonials-1.jpg",
      quote:
        "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      position: "Designer",
      image: "assets/img/testimonials/testimonials-2.jpg",
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Lara Johns",
      position: "CEO ",
      image: "assets/img/testimonials/testimonials-3.jpg",
      quote:
        "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
  ];

  return (
    <>
      {show != false && <Title title={"Testinomials"} />}
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Testimonials</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
            </p>
          </div>

          <Swiper
            className="testimonials-slider swiper"
            slidesPerView={3} // Show 2 testimonials per slide
            onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)} // Update current slide index
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-wrap">
                  <div className="testimonial-item">
                    <img
                      src={testimonial.image}
                      className="testimonial-img"
                      alt=""
                      style={{ width: 100 }}
                    />

                    <h3>{testimonial.name}</h3>
                    <h4>{testimonial.position}</h4>
                    <p>
                      <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                      {testimonial.quote}
                      <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSlider;
