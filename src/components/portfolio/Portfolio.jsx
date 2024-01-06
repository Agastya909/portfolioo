import "./portfolio.scss";
import { motion } from "framer-motion";

const ITEMS = [
  {
    id: 0,
    title: "Notes application",
    img: "https://images.pexels.com/photos/3782134/pexels-photo-3782134.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A note taking application build using React js. Supports editing the note and also assign priority level",
  },
  {
    id: 1,
    title: "Flash Card",
    img: "https://images.pexels.com/photos/4068291/pexels-photo-4068291.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A note taking application build using React js. Supports editing the note and also assign priority level",
  },
  {
    id: 2,
    title: "Music",
    img: "https://images.pexels.com/photos/3971983/pexels-photo-3971983.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A note taking application build using React js. Supports editing the note and also assign priority level",
  },
  {
    id: 3,
    title: "Slack Clone",
    img: "https://images.pexels.com/photos/8284726/pexels-photo-8284726.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "A note taking application build using React js. Supports editing the note and also assign priority level",
  },
];

const PortfolioItem = ({ item }) => {
  return (
    <section className="portfolio-item">
      <img src={item.img} alt="project image" className="img" />
      <motion.div className="text">
        <h2 className="title">{item.title}</h2>
        <p className="desc">{item.description}</p>
      </motion.div>
    </section>
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
