import { motion } from "framer-motion";
import profilePic from "/profile1.png";
import { FaWhatsapp } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <>

    <header className="header">
      <div className="logo">
        <b>Hamid</b> <span>Hussain</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <a
        href="https://wa.me/923433563121"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp />
      </a>
    </header>






      <section className="home-container" id="home">
        <div className="content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="title"
          >
            Hi, I&#39;m <span className="highlight wave">Hamid Hussain</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="description"
          >
            A passionate <span className="highlight">Frontend Developer</span>{" "}
            specialized in building modern, user-friendly web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="btn-container"
          >
            <a href="#projects" className="btn">
              View My Work
            </a>
            <a href="#contact" className="btn secondary">
              Hire Me
            </a>
          </motion.div>
        </div>

        <motion.div
          className="image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <img src={profilePic} alt="Hamid Hussain" className="profile-pic" />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
