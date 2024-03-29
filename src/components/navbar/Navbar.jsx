import { motion } from "framer-motion";
import SideBar from "../sidebar/Sidebar";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: 1 }}
        >
          Agastya
        </motion.span>
        <div className="social">
          <motion.div whileHover={{ scale: 1.25 }}>
            <a
              href="https://github.com/Agastya909"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src="/github.png" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.25 }}>
            <a
              href="https://github.com/Agastya909"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src="/linkedin.png" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.25 }}>
            <a
              href="https://github.com/Agastya909"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src="/instagram.png" />
            </a>
          </motion.div>
          <motion.div whileHover={{ scale: 1.25 }}>
            <a
              href="https://github.com/Agastya909"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="" src="twitter.png" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
