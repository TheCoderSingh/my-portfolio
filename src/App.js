import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Menu />
      <div className="page">
        <Home />
      </div>
      <div className="page">
        <Projects />
      </div>
      <div className="page">
        <About />
      </div>
      <div className="page">
        <Skills />
      </div>
      <div className="page">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
