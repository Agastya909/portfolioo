import { motion } from "framer-motion";
import "./home.css";
import { useState, useEffect } from "react";

const GREETINGS = ["Hello", "Namaste", "Hola", "Konnichiwa", "Bonjour"];
const COLORS = ["#FF6666", "#FDD36A", "#BC7AF9", "#F31559", "#FFB534"];

const Home = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [colorIndex, setColorIndex] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prevIndex) => (prevIndex + 1) % GREETINGS.length);
      setColorIndex((prevIndex) => (prevIndex + 1) % GREETINGS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      <div className="wrapper">
        <motion.h2 animate={{ color: COLORS[greetingIndex] }}>
          {GREETINGS[greetingIndex]}
        </motion.h2>
        <h3>I am a </h3>
        {/* <h1>Fullstack </h1> */}
        <motion.h1 animate={{ color: COLORS[colorIndex] }}>
          Web & Android
        </motion.h1>
        <h1>Developer and also a </h1>
        <motion.h1 animate={{ color: COLORS[colorIndex] }}>
          UI Designer
        </motion.h1>
        <motion.a
          href="#Contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
};

export default Home;
