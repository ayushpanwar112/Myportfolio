
import { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
  


const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Thank you",
        "for checking out my portfolio",
        "My name is Ayush Panwar",
        "and I am a B.Tech student."
      ],
      typeSpeed: 70,    
      backSpeed: 30,    
      backDelay: 1000,  
      startDelay: 500,   
      loop: true,
      showCursor: false
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

   

  return (
    <>
      <div className="container home" id="home">
        <div  data-aos="fade-down"  className="left" >
          <h1 ref={typedRef} > </h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img 
            src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
