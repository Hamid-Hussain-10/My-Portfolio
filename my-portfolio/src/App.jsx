import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Contact from "./assets/components/Contact";
import Projects from "./assets/components/Projects";
import Footer from "./assets/components/footer";

export default function App() {
  return (
    <div className="container">
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Contact />
      <Footer/>
    </div>
  );
}
