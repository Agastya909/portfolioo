import { motion } from "framer-motion";
import "./skills.scss";

const Skills = () => {
  return (
    <motion.div className="skills-main">
      <div className="wrapper">
        <motion.div
          className="languages"
          drag={true}
          dragConstraints={{ bottom: 100, left: -100, right: 100, top: 100 }}
        >
          <h2>Languages</h2>
          <div></div>
        </motion.div>
        <motion.div
          className="frameworks"
          drag={true}
          dragConstraints={{ bottom: 100, left: -100, right: 100, top: 100 }}
        >
          <h2>Frameworks</h2>
          <div></div>
        </motion.div>
        <motion.div
          className="tools"
          drag={true}
          dragConstraints={{ bottom: 100, left: -100, right: 100, top: 100 }}
        >
          <h2>Tools</h2>
          <div></div>
        </motion.div>
        <motion.div
          className="other"
          drag={true}
          dragConstraints={{
            bottom: 50,
            left: -50,
            right: 50,
            top: 50,
          }}
        >
          <h2>Others</h2>
          <div></div>
        </motion.div>
      </div>
    </motion.div>
  );
};
export default Skills;
