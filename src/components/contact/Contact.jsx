import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  const variant = {
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
      y: 300,
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
  const imageVariant = {
    initial: {
      scale: 0.75,
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
  return (
    <div className="contact-main">
      <div className="wrapper">
        <motion.div
          className="text"
          variants={variant}
          initial="initial"
          whileInView="animate"
        >
          <motion.div className="heading">Let us connect</motion.div>
          <motion.div className="details" variants={textVarient}>
            <motion.p>
              Drop an email by clicking on the email-id below{" "}
            </motion.p>
            <motion.a href="mailto:agastyarajawat909@gmail.com">
              agastyarajawat909@gmail.com
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div className="img">
          <motion.img
            src="/man.png"
            alt="3d man illustraition"
            variants={imageVariant}
            initial="initial"
            whileInView="animate"
          />
          <p>
            Illustration and Icons from{" "}
            <a href="https://icons8.com/illustrations">Icons8</a>
          </p>
        </motion.div>
      </div>
      <a href="#Home">
        <img src="/up.png" alt="floating action button" className="fab" />
      </a>
    </div>
  );
};

{
  /*
   */
}
export default Contact;
