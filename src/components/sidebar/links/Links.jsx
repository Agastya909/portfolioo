import { motion } from "framer-motion";

const Links = ({ setOpen }) => {
  const linkItems = ["Home", "Skills", "Projects", "Contact"];
  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.1, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div className="links" variants={variants}>
      {linkItems.map((item, index) => {
        return (
          <motion.div
            key={index}
            className="list-items"
            whileHover={{ scale: 1.25, color: "#F31559" }}
            whileTap={{ scale: 1 }}
            variants={itemVariants}
            onClick={() => setOpen((prev) => !prev)}
          >
            <a href={`#${item}`}>{item}</a>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Links;
