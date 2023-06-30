import React,{useEffect, useState} from "react";
import "./Technologies.scss";
import { FaCode } from "react-icons/fa";


function Technologies() {
  const skills = [
  {name:"HTML",value:100},
  {name:"CSS",value:90},
  {name:"Javascript",value:70},
  {name:"RactJs",value:90},
  {name:"NuxtJs",value:90},
  {name:"Strapi",value:90},
  {name:"Django",value:80},
  {name:"Python",value:70},
  {name:"Tailwind",value:90},
  {name:"Bootstrap",value:100},
  {name:"Antd",value:100}
]

const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    // Trigger the fade-in effect after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="page-container">
      <div className="page-icon">
        <FaCode />
      </div>
       
      <div className="progress-section" data-aos="fade-left" data-aos-once="true">
        {skills.map((skill, index) => (
          <div className="task-progress" key={index}>
          <p>{skill.name}
            <span>{skill.value}%</span>
          </p>
          <div className={`progress-container ${isVisible ? 'visible' : ''}`}>
          <progress className="progress progress1"  max="100" value={isVisible ? skill.value : 0}></progress>
          </div>
        </div>
        ))}
        
      </div>    
      </div>
  );
}

export default Technologies;
