import Counts from "../components/Counts";
import Slider from "../components/Slider";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Testinomials from "./Testinomials";

function Home() {
  return (
    <>
      <Slider />
      <main id="main">
        <About show={false} />
        <Counts />
        <Services show={false} />
        <Testinomials show={false} />
        <Contact show={false} />
      </main>
    </>
  );
}

export default Home;
