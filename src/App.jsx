import "./App.css";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
function App() {
  return (
    <>
      <Header />
      <div className="showcase_container">
        <h1>
          Oi, eu sou o <br />
          Valfran Jr!
        </h1>
        <p>Um desenvolvedor web, apaixonado por tecnologia e inovação.</p>
      </div>
      <About />
    </>
  );
}

export default App;
