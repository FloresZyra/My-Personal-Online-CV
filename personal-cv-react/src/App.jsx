
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]
  const education = [
    {
      year: "2028",
      program: "BS Information Technology",
      school: "USTP -CDO Campus"
    },
    {
      year: "2024",
      program: "Senior High School",
      school: "Liceo de Cagayan University"
    },
    {
      year: "2022",
      program: "HIgh School",
      school: "Pedro 'Oloy' N. Roa Sr. High School"
    },
    {
      year: "2018",
      program: "Elementary School",
      school: "Pedro 'Oloy' N. Roa Sr. Elementary School"
    }
    
  ];
    
  return (
    <><div className={darkMode ? "app-container dark-mode" : "app-container"}>
      <button id="themeToggle" onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
      <><div>
        <h1 id="Title">My Personal Online CV</h1>
      </div></>
        <Header />
        <About />
        <Skills skills={skills} />
        <Education education={education} />
        <Contact />
        <footer>
            <p id="Copyright">&copy; 2026 Zyra Nadine Flores. All rights reserved.</p>
        </footer>

        <script src="js/script.js"></script>
      </div><>  
      </></>
  );
}

export default App;

