import Title from "../components/Title";

const Faq = () => {
  // Define an array of FAQ items
  const faqItems = [
    {
      question: "Non consectetur a erat nam at lectus urna duis?",
      answer:
        "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      question:
        "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      answer:
        "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.",
    },
  ];

  return (
    <>
      <Title title="Frequently Asked Questions" />

      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <ul className="faq-list accordion" data-aos="fade-up">
            {faqItems.map((item, index) => (
              <li key={index}>
                <a
                  data-bs-toggle="collapse"
                  className="collapsed"
                  data-bs-target={`#faq${index + 1}`}
                >
                  {item.question}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </a>
                <div
                  id={`faq${index + 1}`}
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Faq;
