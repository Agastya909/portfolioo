import { motion } from "framer-motion";
import "./portfolio.css";

const ITEMS = [
  {
    id: 0,
    title: "Workout Tracker",
    img: "https://private-user-images.githubusercontent.com/51243856/319471051-f2c4d2e9-215e-40f2-bc7f-0ac2a78a73f6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyMTMyODMsIm5iZiI6MTcxMjIxMjk4MywicGF0aCI6Ii81MTI0Mzg1Ni8zMTk0NzEwNTEtZjJjNGQyZTktMjE1ZS00MGYyLWJjN2YtMGFjMmE3OGE3M2Y2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA0VDA2NDMwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFhYzA3NGM5N2RjNWEzMWQ5ZjQwYzU1N2ZlNTQ2ZDJmNGI1ZGRmMTVlZWUzNzA3YzBiNTNjZTE5MjhiMjNhNjUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mZoQWqozOpvwQvHKr4XF0OLTsOevUwozsJTtNAQB0aE",
    description:
      "A simple workout app built using React native to store workout logs.",
    link: "https://github.com/Agastya909/workoutTracker",
  },
  {
    id: 1,
    title: "Coffee Shop UI",
    img: "https://private-user-images.githubusercontent.com/51243856/319474089-7e96eb7b-a3ec-4730-baf8-49175e4c37b6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyMTM5NDMsIm5iZiI6MTcxMjIxMzY0MywicGF0aCI6Ii81MTI0Mzg1Ni8zMTk0NzQwODktN2U5NmViN2ItYTNlYy00NzMwLWJhZjgtNDkxNzVlNGMzN2I2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA0VDA2NTQwM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY1OTdhNjE2ZjIxYTI1ZTY2Y2M2MDZlZjBlMmUyYWU0NzRkOGVkMzQzMDkzNzRkZTdmN2RiNzE4MzQ4ZWJjMjcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.NNKXFF6STTJi4FfuD7H9LzEUI-yjPrmbsSk270U70N0",
    description: "A UI only application for a shop selling drinks and coffee.",
    link: "https://github.com/Agastya909/coffeeHouse",
  },
  {
    id: 2,
    title: "Video Streaming Application",
    img: "https://private-user-images.githubusercontent.com/51243856/319476648-726e118c-897d-47d7-b5f6-1e034a6bb954.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyMTQ1NDYsIm5iZiI6MTcxMjIxNDI0NiwicGF0aCI6Ii81MTI0Mzg1Ni8zMTk0NzY2NDgtNzI2ZTExOGMtODk3ZC00N2Q3LWI1ZjYtMWUwMzRhNmJiOTU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA0VDA3MDQwNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlmYThiYWEwNDk3ZjU0MGFiOThmN2FiY2UxY2RmYzhlZjJiZDI0ZDk0NWQ5NmU4YjA4NDZmYjFhMjYzYjBmNmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.1uP4eXMH5ioHFyOAmUDIR-W-9yjEJANEZnWuyLT-M80",
    description:
      "A Mobile video streaming application with upload video functionality. Also supports searching for content.",
    link: "https://github.com/Agastya909/natflux-android",
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
    <motion.section className="portfolio-item" whileHover={{ scale: 1.05 }}>
      <a href={item.link} target="_blank" rel="noreferrer">
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
          <motion.h3 className="title" variants={textVarient}>
            {item.title}
          </motion.h3>
          <motion.p className="desc" variants={textVarient}>
            {item.description}
          </motion.p>
        </motion.div>
      </a>
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    <div className="portfolio-main">
      <div className="progress">
        <h1>My Work</h1>
      </div>
      <div className="portFolio-items">
        {ITEMS.map((item, index) => (
          <PortfolioItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
