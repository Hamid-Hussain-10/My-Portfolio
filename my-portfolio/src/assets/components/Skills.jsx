import { motion } from "framer-motion";
import "./Skills.css";

const skillsData = [
  { name: "HTML", icon: "code" },
  { name: "CSS", icon: "palette" },
  { name: "JavaScript", icon: "bolt" },
  { name: "React", icon: "hub" },
  { name: "Tailwind CSS", icon: "style" },
  // { name: "Framer Motion", icon: "animation" },
  { name: "Git & GitHub", icon: "terminal" },
  // { name: "Node.js", icon: "memory" },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>
      <motion.div
        className="skills-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {skillsData.map((skill, i) => (
          <motion.div
            className="skill-card"
            key={i}
            variants={cardVariants}
          >
            <span className="material-icons skill-icon">{skill.icon}</span>
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotate: -5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export default Skills;
