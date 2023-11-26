
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ArrowDivider from "./components/ArrowDivider";
import Work from "./components/Work";
import UICaseStudyHC from "./components/UICaseStudyHC";
import PersonaL from "./components/PersonaL";
import UXCaseStudyWW from "./components/UXCaseStudyWW";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WebDesignII from "./components/webDesignII";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={
              <div>
                <Hero />
                <About />
                <Skills />
                <ArrowDivider />
                <Work />
                <Contact />
                
              </div>
            } />
             <Route path="/UICaseStudyHC" element={<div><UICaseStudyHC /> <PersonaL /></div>} />
            <Route path="/UXCaseStudyWW" element={<UXCaseStudyWW />} />
            <Route path="/WebDesignII" element={<WebDesignII />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
