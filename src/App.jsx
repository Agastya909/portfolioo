import "./app.scss";
import NavBar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <section id="Home">
        <NavBar />
      </section>
      <section>Parallex</section>
      <section id="Skills">Skills</section>
      <section>Parallex</section>
      <section id="Projects">Portfolio</section>
      <section>Parallex</section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
