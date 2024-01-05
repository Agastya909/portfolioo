import { motion } from "framer-motion";
import "./skills.scss";

const Skills = () => {
  return (
    <motion.div className="skills-main">
      <div className="wrapper">
        <motion.div
          className="languages"
          drag
          dragSnapToOrigin
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Languages</h2>
          <div>
            <img src="/cpp.png" alt="C++ icon" />
            <img src="/js.png" alt="Javascript icon" />
            <img src="/ts.png" alt="Typescript icon" />
          </div>
        </motion.div>
        <motion.div
          className="frameworks"
          drag
          dragSnapToOrigin
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Frameworks</h2>
          <div>
            <img src="/react.png" alt="React" />
            <img src="/express.png" alt="Express icon" />
            <img src="/tailwind.png" alt="Tailwind icon" />
            <img src="/framer.png" alt="Framer motion icon" />
          </div>
        </motion.div>
        <motion.div
          className="tools"
          drag
          dragSnapToOrigin
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Tools</h2>
          <div>
            <img src="/postman.png" alt="Postman" />
            <img src="/vsc.png" alt="vs code" />
            <img src="/git.png" alt="git" />
            <img src="/mongo.png" alt="mongo" />
            <img src="/mysql.png" alt="Postman" />
          </div>
        </motion.div>
        <motion.div
          className="other"
          drag
          dragSnapToOrigin
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <h2>Others</h2>
          <div>
            <img src="/vim.png" alt="vim" />
            <img src="/linux.png" alt="linux" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Skills;
