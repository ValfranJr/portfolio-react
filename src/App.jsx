import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="showcase_container" id="home">
        <h1>
          Oi, eu sou o <br />
          Valfran Jr!
        </h1>
        <p>Um desenvolvedor web, apaixonado por tecnologia e inovação.</p>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
