import React, { useState } from "react";
import Home from "./Home.tsx";
import About from "./About.tsx";
import Projects from "./Projects.tsx";
import Resume from "./Resume.tsx";
import "./App.css";

function App() {
  const [state, setState] = useState<String>("Home");

  function handleHome(): void {
    setState("Home");
  }
  function handleAbout(): void {
    setState("About");
  }
  function handleProjects(): void {
    setState("Projects");
  }
  function handleResume(): void {
    setState("Resume");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-logo">
          <span className="span-large">
            ANTHONY
            <span className="span-bold">
              <span className="span-yellow">SAYA.</span>
            </span>
          </span>
          <br />
          <span className="span-yellow">Front-end Developer</span>{" "}
          <span className="span-bold">Open to Hire</span>
        </div>
        <nav className="App-header-links">
          <span className="span-link" onClick={handleHome}>
            Home
          </span>
          &nbsp;|&nbsp;
          <span className="span-link" onClick={handleAbout}>
            About
          </span>
          &nbsp;|&nbsp;
          <span className="span-link" onClick={handleProjects}>
            Projects
          </span>
          &nbsp;|&nbsp;
          <span className="span-link" onClick={handleResume}>
            Resume
          </span>
        </nav>
      </header>
      <main className="App-main">
        {state == "Home" && <Home />}
        {state == "About" && <About />}
        {state == "Projects" && <Projects />}
        {state == "Resume" && <Resume />}
      </main>
    </div>
  );
}

export default App;
