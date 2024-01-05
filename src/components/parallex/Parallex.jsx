import { useRef } from "react";
import "./parallex.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallex = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "1000%"]);
  const yPs = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const est = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div className="parallex-main" ref={ref}>
      <motion.h1 style={{ y: yBg }}>
        {type === "skills" ? "Skills" : "Portfolio"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ x: est }}></motion.div>
      <motion.div className="stars" style={{ x: yPs }}></motion.div>
    </div>
  );
};

export default Parallex;
