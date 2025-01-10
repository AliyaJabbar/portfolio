import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const name="john Doe";
    const profession="Full Stack Developer";

  return(
    <div className="App">
    <Header/>
      <About/> 
      <ProjectList/>

      <Contact/>
      <Footer/>
      {/*footer section*/}
     
    </div>
  );
}

export default App;
