import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
    {
      title: "Kids School Website",
      link: "https://schoolhhdev.netlify.app/",
      img: "/school.png",
     },
     {
       title: "Football Club Website",
       link: "https://fcsadpara.netlify.app/",
       img: "/football.png",
     },
     {
       title: "Gaming Website",
       link: "https://gamingwebsitehhdev.netlify.app/",
       img: "/game.png",
    },
     {
       title: "Shawarma Website",
       link: "https://shawarmahhdev.netlify.app/",
       img: "/shawarma.png",
     },
     {
       title: "Grocery food Website",
       link: "https://shawarmahhdev.netlify.app/",
       img: "/food.png",
     },
     {
       title: "Juice Website",
       link: "https://shawarmahhdev.netlify.app/",
       img: "/juice.png",
   },
   ];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="project-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"  
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.img} alt={project.name} className="project-img" />
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default Projects;
