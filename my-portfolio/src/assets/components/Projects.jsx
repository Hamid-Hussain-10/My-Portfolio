// import { motion } from "framer-motion";
// import "./Projects.css";

// const projects = [
//   {
//     title: "Kids School Website",
//     link: "https://schoolhhdev.netlify.app/",
//     img: "/school.png",
//   },
//   {
//     title: "Football Club Website",
//     link: "https://fcsadpara.netlify.app/",
//     img: "/football.png",
//   },
//   {
//     title: "Gaming Website",
//     link: "https://gamingwebsitehhdev.netlify.app/",
//     img: "/game.png",
//   },
//   {
//     title: "Shawarma Website",
//     link: "https://shawarmahhdev.netlify.app/",
//     img: "/shawarma.png",
//   },
//   {
//     title: "Grodery food Website",
//     link: "https://shawarmahhdev.netlify.app/",
//     img: "/food.png",
//   },
//   {
//     title: "Juice Website",
//     link: "https://shawarmahhdev.netlify.app/",
//     img: "/juice.png",
//   },
//   {
//     title: "Profile",
//     link: "https://shawarmahhdev.netlify.app/",
//     img: "/profile.png",
//   }
// ];

// const Projects = () => {
//   return (
//     <section className="projects" id="projects">
//       <motion.h2
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         Projects
//       </motion.h2>
//       <motion.div
//         className="project-grid"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.5 }}
//       >
//         <ScrollTriggered />
//       </motion.div>
//     </section>
//   );
// };

// const ScrollTriggered = () => {
//   return (
//     <div style={container}>
//       {projects.map(({ title, link, img }, i) => (
//         <Card i={i} title={title} link={link} img={img} key={title} />
//       ))}
//     </div>
//   );
// };

// // eslint-disable-next-line react/prop-types
// const Card = ({ title, link, img, i }) => {
//   return (
//     <motion.div
//       className={`card-container-${i}`}
//       style={cardContainer}
//       initial="offscreen"
//       whileInView="onscreen"
//       viewport={{ amount: 0.8 }}
//     >
//       <motion.div style={card} variants={cardVariants} className="card">
//         <img src={img} alt={title} style={{ width: "100%", borderRadius: "12px" }} />
//         <h3>{title}</h3>
//         <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
//           View Project
//         </a>
//       </motion.div>
//     </motion.div>
//   );
// };

// const cardVariants = {
//   offscreen: {
//     y: 300,
//   },
//   onscreen: {
//     y: 50,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };

// const container = {
//   margin: "20px auto",
//   maxWidth: 500,
//   paddingBottom: 100,
//   width: "100%",
// };

// const cardContainer = {
//   overflow: "hidden",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "relative",
//   paddingTop: 20,
//   marginBottom: -120,
// };

// const card = {
//   width: 400,
//   height: 450,
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
//   borderRadius: 20,
//   background: "white",
//   padding: "20px",
//   boxShadow:
//     "blue",
//   transformOrigin: "10% 60%",
// };

// export default Projects;




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
       title: "Grodery food Website",
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
              <h3>{project.name}</h3>
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
