import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  return (
    <motion.footer className="footer">
      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Connect with Me
        </motion.h2>

        <motion.div
          className="footer-icons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {socialLinks.map(({ name, icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="material-icons"
                variants={iconHover}
                whileHover="hover"
              >
                {icon}
              </motion.span>
              <p>{name}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="footer-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          © {new Date().getFullYear()} Hamid Hussain || All Rights Reserved.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

const socialLinks = [
  {
    name: "GitHub",
    icon: "code",
    link: "https://github.com/Hamid-Hussain-10?tab=repositories",
  },
  {
    name: "LinkedIn",
    icon: "business_center",
    link: "https://www.linkedin.com/in/hamid-hussain7/",
  },
  { name: "Email", icon: "mail", link: "mailto:hhdev456@gmail.com" },
  {
    name: "Whatsapp",
    icon: "chat",
    link: "https://wa.me/923433563121"
  }
];

const iconVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 8 },
  },
};

const iconHover = {
  hover: {
    color: "#FFD700",
    textShadow: "0px 0px 10px rgba(255, 215, 0, 0.8)",
    transition: { duration: 0.3 },
  },
};

export default Footer;
