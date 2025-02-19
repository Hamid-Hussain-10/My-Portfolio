import { motion } from "framer-motion";
import "./Contact.css";
import contactImg from "/contact.png"; 

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="contact-img-container"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={contactImg} alt="Contact" className="contact-img" />
        </motion.div>
        <ContactForm />
      </motion.div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <motion.form
      className="contact-form"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <motion.div className="input-container" variants={inputVariants}>
        <input type="text" placeholder="Your Name" required />
      </motion.div>
      <motion.div className="input-container" variants={inputVariants}>
        <input type="email" placeholder="Your Email" required />
      </motion.div>
      <motion.div className="input-container" variants={inputVariants}>
        <textarea placeholder="Your Message" rows="5" required></textarea>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="submit-btn"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

const inputVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export default Contact;
