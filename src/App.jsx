import Navbar from "./components/Navbar";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aos from "aos";
import { useEffect} from "react";
import Contact from "./components/Contact";
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    Aos.init();
  
   
  }, )
  
  return (
    <>
         
      <div className="container">
          <Navbar/>
          <Home/>
        <Skills/>
        <Projects/>
       <Contact/>
      </div> 
    </>
  );
};

export default App;
