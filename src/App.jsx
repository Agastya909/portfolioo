import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import "./app.scss";

const App = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });
  return (
    <div ref={ref} className="main-div">
      <motion.div className="progress-bar" style={{ scaleX: scaleX }} />
      <div>
        <section id="Home">
          <NavBar />
          <Home />
        </section>
        <section>
          <Parallex type="skills" />
        </section>
        <section id="Skills">
          <Skills />
        </section>
        <section>
          <Parallex type="portfolio" />
        </section>
        <div id="projects">
          <Portfolio />
        </div>
        {/* <section>Parallex</section> */}
        {/* add parallex here too and try to smooth out the animation between portfolio and contact us page */}
        <section id="Contact">Contact</section>
      </div>
    </div>
  );
};

export default App;
