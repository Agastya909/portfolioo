import { motion } from "framer-motion";
import "./skills.css";

const Skills = () => {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  const itemVariant = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.div
      className="skills-main"
      variants={variants}
      initial="initial"
      whileInView={"animate"}
    >
      <motion.div className="languages" variants={variants}>
        <h2>Languages</h2>
        <div>
          <motion.img
            src="/cpp.png"
            alt="C and C++ icon"
            variants={itemVariant}
          />
          <motion.img
            src="/js.png"
            alt="Javascript icon"
            variants={itemVariant}
          />
          <motion.img
            src="/ts.png"
            alt="Typescript icon"
            variants={itemVariant}
          />
        </div>
      </motion.div>
      <motion.div className="frameworks" variants={variants}>
        <h2>Frameworks</h2>
        <div>
          <motion.img src="/react.png" variants={itemVariant} alt="React" />
          <motion.img
            src="/express.png"
            variants={itemVariant}
            alt="Express icon"
          />
          <motion.img
            src="/tailwind.png"
            variants={itemVariant}
            alt="Tailwind icon"
          />
          <motion.img
            src="/framer.png"
            variants={itemVariant}
            alt="Framer motion icon"
          />
        </div>
      </motion.div>
      <motion.div className="tools" variants={variants}>
        <h2>Tools</h2>
        <div>
          <motion.img src="/postman.png" variants={itemVariant} alt="Postman" />
          <motion.img src="/vsc.png" variants={itemVariant} alt="vs code" />
          <motion.img src="/git.png" variants={itemVariant} alt="git" />
          <motion.img src="/mongo.png" variants={itemVariant} alt="mongo" />
          <motion.img src="/mysql.png" variants={itemVariant} alt="Postman" />
        </div>
      </motion.div>
      <motion.div className="other" variants={variants}>
        <h2>Others</h2>
        <div>
          <motion.img src="/vim.png" alt="vim" variants={itemVariant} />
          <motion.img src="/linux.png" alt="linux" variants={itemVariant} />
          <motion.img src="/figma.png" alt="figma" variants={itemVariant} />
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Skills;
