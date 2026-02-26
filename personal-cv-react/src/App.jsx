import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <><div className={darkMode ? "dark-mode" : ""}>
      <button id="themeToggle" onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <><div>
        <h1 id="Title">My Personal Online CV</h1>
      </div></>
        <Header />
        <About />
        <Skills />
        <Education />
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

