import Navbar from "./Navbar";
import Welecome from "./Welecome";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <section id="welecome">
        <Welecome />
      </section>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default SharedLayout;
