import "./portfolio.scss";
import { motion } from "framer-motion";

const ITEMS = [
  {
    id: 0,
    title: "Notes application",
    img: "https://images.pexels.com/photos/3782134/pexels-photo-3782134.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 1,
    title: "Flash Card",
    img: "https://images.pexels.com/photos/4068291/pexels-photo-4068291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    title: "Music",
    img: "https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    title: "Slack Clone",
    img: "https://images.pexels.com/photos/8284726/pexels-photo-8284726.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const imageVariant = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const textVarient = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const PortfolioItem = ({ item }) => {
  return (
    <motion.section className="portfolio-item">
      <div>
        <motion.img
          src={item.img}
          alt="project image"
          className="img"
          variants={imageVariant}
          initial="initial"
          whileInView="animate"
        />
      </div>
      <motion.div
        className="text"
        variants={textVarient}
        initial="initial"
        whileInView="animate"
      >
        <motion.h2 className="title" variants={textVarient}>
          {item.title}
        </motion.h2>
        <motion.p className="desc" variants={textVarient}>
          {item.description}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio-main">
      <div className="progress">
        <h1>My Work</h1>
      </div>
      {ITEMS.map((item, index) => (
        <PortfolioItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Portfolio;
