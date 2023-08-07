import React from "react";
import "./Portfolio.scss";
import { MdWork } from "react-icons/md";
import cg from "../../Static/Images/cg.webp";
import netaji from "../../Static/Images/netaji.png";
import balaji from "../../Static/Images/balaji.png";
import barai from "../../Static/Images/barai.png";
import chetan from "../../Static/Images/cachetan.png";
import dental from "../../Static/Images/dental.png";
import malati from "../../Static/Images/malati.png";
import bookmyshow from "../../Static/Images/bookmyshow.png"
import cgUni from "../../Static/Images/university.png";

function Portfolio() {
  const works = [
    {
      image: cg,
      desc: "CleverGround LMS is designed and curated to suit the digital needs of modern colleges and university. Bringing the exact combination of automated teaching and learning experience.",
      link: "https://product.cleverground.com/",
    },
    {
      image: cgUni,
      desc: "CleverGround Accreditation App Provides class-leading analytics for colleges and universities leading to end-to-end automation of NAAC Accreditation.",
      link: "https://university.cleverground.com/",
    },
    {
      image: netaji,
      desc: "Netaji Safe Company Is A Reputed And Trusted Name Which Stands For Quality, Durability, Reliability And Affordability. Netaji Safe Company Offers A Complete Range Of Security Equipment",
      link: "https://www.netajisafe.com/",
    },
    {
      image: balaji,
      desc: "Balaji Villa is one of the famous luxurious 4 bedrooms bunglow in Panhala, Kolhapur.",
      link: "https://balajivillapanhala.com/",
    },
    {
      image: barai,
      desc: "Dr. Barai clinic is a Sex and Skin Care Centre. specialises in Acne, Acne Scars, skin whitening, Skin Tan, hair Treatment,   Tattoo removal, Hair Reduction, hair Transplant,  sexual disorder. ",
      link: "https://admin.drbaraisclinic.com/",
    },
    {
      image: chetan,
      desc: "Chetan Oswal & Associates (COA) is a TEAM of young and dynamic professionals with a passion to provide personalized, practical and innovative solutions to complex tax problems.",
      link: "https://cachetanoswal.com/",
    },
    {
      image: dental,
      desc: " The speciality dental clinic is in kolhapur. Detailed Examination, discussion of various treatment modalities with diagnostic models, photographs.",
      link: "https://www.thespecialitydental.com/",
    },
    {
      image: malati,
      desc: "Malati Autocast Pvt. Ltd. is the newest addition to the Malati Group and lives up to the 50 year heritage symbolizing Quality and Trust.",
      link: "https://malatiautocast.com/",
    },
    {
      image: bookmyshow,
      desc: "BookMyShow is an online movie ticketing platform that allows users to book tickets for upcoming movies.",
      link: "https://react-book-my-show-app.netlify.app/"
    }
  ];
  return (
    <div className="page-container">
      <div className="page-icon">
        <MdWork />
      </div>
      <div className="portfolio-container">
        {works.map((work, index) => (
          <div className="card" key={index}>
            <img src={work.image} alt="" />
            <div className="overlay">
            <h3>{work.desc}</h3>
            <a href={work.link} target="_blank" rel="noreferrer">
              Visit
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
