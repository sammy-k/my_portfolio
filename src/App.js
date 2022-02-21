import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
