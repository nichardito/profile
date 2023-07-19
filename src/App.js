import React from "react";
import "../src/styles/global.css";

import Header from "../src/assets/header";
import Body from "../src/assets/body";
import About from "../src/assets/about";
import Projects from "../src/assets/projects";
import Skills from "../src/assets/skills";
import Contact from "../src/assets/contact";
import Footer from "../src/assets/footer";

function App() {
  return (
    <div>
      <div>
      <Header />
      </div>

      <div>
      <Body />
      </div>

      <div>
      <About />
      </div>      

      <div>
      <Projects />
      </div>

      <div>
      <Skills />
      </div>

      <div>
      <Contact />
      </div>

      <div>
      <Footer />
      </div>

  </div>
  );
}

export default App;
