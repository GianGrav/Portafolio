import { useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import projectsData from "./projects.json";

function App() {
  const [currentSection, setCurrentSection] = useState("about");

  const handleSectionClick = (section) => {
    setCurrentSection(section);
  };

  return (
    <>
      <div>
        <nav>
          <ul>
            <li
              className={currentSection === "about" ? "active" : ""}
              onClick={() => handleSectionClick("about")}
            >
              Acerca de Mi
            </li>
            <li
              className={currentSection === "projects" ? "active" : ""}
              onClick={() => handleSectionClick("projects")}
            >
              Proyectos
            </li>
            <li
              className={currentSection === "contact" ? "active" : ""}
              onClick={() => handleSectionClick("contact")}
            >
              Contacto
            </li>
          </ul>
        </nav>
      </div>
      <div>
        {currentSection === "about" && <About />}
        {currentSection === "projects" && <Projects projectsData={projectsData} />}
        {currentSection === "contact" && <Contact />}
      </div>
    </>
  );
}

export default App;