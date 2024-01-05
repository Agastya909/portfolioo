import { motion } from "framer-motion";

const Links = () => {
  const linkItems = ["Home", "Skills", "Projects", "Contact"];
  return (
    <div className="links">
      {linkItems.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="list-items"
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 1 }}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Links;
