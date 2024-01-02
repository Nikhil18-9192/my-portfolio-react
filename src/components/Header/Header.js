import React from "react";
import "./Header.scss";
import profile from "../../Static/Images/profile_deepak.jpeg";
import { NavLink, useLocation } from "react-router-dom";
import Phonetoolbar from "../Phonetoolbar/Phonetoolbar";


function Header() {
  const location = useLocation();
  const path = location.pathname;
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Technologies", link: "/technologies" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="header-container">
      <div className="upper-container">
        <div className="image">
          <img src={profile} alt="profile" />
        </div>
        <div className="menu">
          {menuItems.map((item, index) => (
            <NavLink
              className={path === item.link.toLowerCase() ? "active" : ""}
              to={item.link}
              key={index}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="resume-btn">
          <NavLink to="https://drive.google.com/file/d/1fYGV8Vfn1TcQNseS4rWWQSdoVCHFYH2n/view?usp=drive_link" target="_blank">
            Download Resume
          </NavLink>
        </div>
        
      </div>
      <Phonetoolbar /> 
      <div className="title-text">
        <h1>
          Deepak Korane |{" "}
          {path === "/"
            ? "Front-End Developer"
            : path.split("/")[1].charAt(0).toUpperCase() +
              path.split("/")[1].slice(1)}
        </h1>
      </div>
    </div>
  );
}

export default Header;
