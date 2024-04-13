import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/About/AboutMe";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "./global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element=<Home/> />

          <Route path="/about" element={<AboutMe />} />

          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
