import React from "react";
import "./Experience.scss";
import { MdWorkHistory } from "react-icons/md";

function Experience() {
  const experience = [
    {
      title: "Front-End Developer",
      description:
        "At Cleverground, I focused on their primary product, the learning management system. I started by developing UI for exciting modules, ensuring a visually appealing experience. I then delved into API integrations, seamlessly connecting different components for a smooth user journey. Expanding my skills, I learned Django and created Restful APIs, contributing to backend development. Collaborating with cross-functional teams, I actively work on product improvements. Cleverground provided an enriching experience, delivering innovative learning solutions! ",
      company: "Cleverground Technology PVT Ltd.",
      skills: [
        "ReactJs",
        "Django",
        "Python",
        "html/sass",
        "Javascript",
        "Bootstrap",
        "Antd",
      ],
      experience: { start: "Aug-2021", end: "Present" },
    },
    {
      title: "Web Developer",
      description:
        "At Formec Media, I had the exciting opportunity to develop websites according to client requirements.Working closely with designers, I created custom designs that seamlessly blended creativity and functionality.I expanded my skills by learning Strapi for backend development and integrating Google APIs for enhanced website features.Ensuring a seamless user experience, I specialized in responsive web design across different devices.Formec Media allowed me to deliver tailored web solutions that exceeded client expectations.",
      company: "Formec Media LLP.",
      skills: [
        "html/sass",
        "Javascript",
        "Bootstrap",
        "Tailwind",
        "NuxtJs",
        "Strapi",
        "VueJs",
      ],
      experience: { start: "Sep-2020", end: "Jul-2021" },
    },
  ];
  return (
    <div className="page-container">
      <div className="page-icon">
        <MdWorkHistory />
      </div>
      <div className="experience-container">
        {experience.map((item, index) => (
          <div key={index} className="experience">
            <div className="wrapper">
              <div className="title">
                <h3>{item.title}</h3>
                <h4>{item.company}</h4>
              </div>
              <div className="duration">
                <span>
                  {item.experience.start} - {item.experience.end}
                </span>
              </div>
              <div className="description">
                <p>{item.description}</p>
              </div>
              <div className="skills">
                <h4>Technologies Used :</h4>
                {item.skills.map((skill, index) => (
                  <span className="skill" key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
