import { motion } from "framer-motion";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <motion.span
          initial={{ scale: 0.5 }}
          transition={{ duration: 0.5 }}
          whileInView={{ scale: 1 }}
        >
          Agastya
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/Agastya909"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="/github.png" />
          </a>
          <a
            href="https://github.com/Agastya909"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="/linkedin.png" />
          </a>
          <a
            href="https://github.com/Agastya909"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="/instagram.png" />
          </a>
          <a
            href="https://github.com/Agastya909"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="" src="twitter.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

// <a target="_blank" href="https://icons8.com/icon/hFoVFpm6gl9A/instagram">Instagram</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

export default NavBar;
