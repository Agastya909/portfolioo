import "./app.scss";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/Navbar";
import Parallex from "./components/parallex/Parallex";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
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
      <section id="Projects">Portfolio</section>
      {/* <section>Parallex</section> */}
      {/* add parallex here too and try to smooth out the animation between portfolio and contact us page */}
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
