import { motion } from "framer-motion";

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          strokeWidth="3"
          stroke="#0c0c1d"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 2.5 L 21 2.5" },
            open: { d: "M 3 18 L 18 2.5" },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#0c0c1d"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 10.5 L 21 10.5", opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          strokeWidth="3"
          stroke="#0c0c1d"
          strokeLinecap="round"
          variants={{
            closed: { d: "M 2 18.5 L 21 18.5" },
            open: { d: "M 3 2.5 L 18 18" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton;
