import { motion } from "framer-motion";
import aboutPic from "/about-img.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about-container" id="about">
      <motion.div
        className="about-image"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img src={aboutPic} alt="About Me" className="about-pic" />
      </motion.div>

      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I&#39;m <span className="highlight">Hamid Hussain</span>, a passionate
          <span className="highlight"> Frontend Developer</span> with experience
          in crafting responsive and interactive websites using modern web
          technologies.
        </p>
        <p className="about-text">
          I specialize in <span className="highlight">React.js</span>,
          JavaScript, CSS and HTML . My goal is to build beautiful and
          user-friendly applications that provide an excellent user experience.
        </p>
        <a href="/resume.pdf" download className="btn">
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;
