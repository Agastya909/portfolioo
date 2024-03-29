import ToggleButton from "./buttons/ToogleButton";
import Links from "./links/Links";
import { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.css";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const varients = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 30,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={isOpen ? "open" : "closed"}>
      <motion.div className="bg" variants={varients}>
        <Links setOpen={setOpen}  />
        <ToggleButton setOpen={setOpen} />
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
