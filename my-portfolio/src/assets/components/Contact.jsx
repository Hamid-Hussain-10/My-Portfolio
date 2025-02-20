import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h2>

      {/* Floating Skill Icons */}
      <FloatingIcons />

      <motion.div
        className="contact-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
};

const FloatingIcons = () => {
  const icons = [
    "code", 
    "palette", 
    "bolt",
    "javascript",
    "css", 
    "hub"
  ];

  return (
    <>
      <div className="floating-icons left">
        {icons.slice(0, 3).map((icon, index) => (
          <FloatingIcon key={index} icon={icon} delay={index * 0.5} />
        ))}
      </div>

      <div className="floating-icons right">
        {icons.slice(3).map((icon, index) => (
          <FloatingIcon key={index} icon={icon} delay={index * 0.5} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react/prop-types
const FloatingIcon = ({ icon, delay }) => {
  return (
    <motion.i
      className="material-icons floating-icon"
      initial={{ y: 10 }}
      animate={{ y: [-10, 10, -10] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    >
      {icon}
    </motion.i>
  );
};

const ContactForm = () => {
  return (
    <motion.form
      className="contact-form"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      {formFields.map((field, index) => (
        <motion.div className="input-container" variants={inputVariants} key={index}>
          {field.type === "textarea" ? (
            <textarea placeholder={field.placeholder} rows="5" required></textarea>
          ) : (
            <input type={field.type} placeholder={field.placeholder} required />
          )}
        </motion.div>
      ))}

      <motion.button
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px #ff5733" }}
        whileTap={{ scale: 0.9 }}
        className="submit-btn"
      >
        Send Message
      </motion.button>
    </motion.form>
  );
};

const formFields = [
  { type: "text", placeholder: "Your Name" },
  { type: "email", placeholder: "Your Email" },
  { type: "textarea", placeholder: "Your Message" },
];

const inputVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};

export default Contact;
