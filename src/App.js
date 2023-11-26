
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ArrowDivider from "./components/ArrowDivider";
import Work from "./components/Work";
import UICaseStudyHC from "./components/UICaseStudyHC";
import PersonaL from "./components/PersonaL";
import Features from "./components/Features";
import Takeaways from "./components/Takeaways";
import SiteArchitecture from "./components/SiteArchitecture";
import UXCaseStudyWW from "./components/UXCaseStudyWW";
import UserResearch from "./components/UserResearch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PovHMW from "./components/PovHMW";
import WebDesignII from "./components/webDesignII";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmpathyMap from "./components/EmpathyMap";


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
             <Route path="/UICaseStudyHC" element={<div><UICaseStudyHC /> <PersonaL /><Features /><SiteArchitecture /><Takeaways/><Work />< Contact /></div>} />
            <Route path="/UXCaseStudyWW" element={<div><UXCaseStudyWW /><UserResearch /> <PersonaL /><EmpathyMap /><PersonaL /><EmpathyMap /><SiteArchitecture /><PovHMW /></div>} />
            <Route path="/WebDesignII" element={<WebDesignII />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
