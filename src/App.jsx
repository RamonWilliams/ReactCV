
import React, { useState } from "react";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Hero from "./components/Hero/Hero";
import Language from "./components/Lenguages/Lenguage";

import { CV } from "./CV/CV";




const { hero,education,experience,languages} = CV;

function App() {
 
  const [showEducation,setShowEducation] = useState(true) ;

  return (
    <div className="App">
        <Hero hero={hero} />  
        <div className="button">   
          
        <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
        </button>
        </div>
        <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
        </div>
        <About hero={hero} />
        <Experience experience={experience} />
        <Language languages={languages} />
       
       
    </div>
  );
};

export default App;