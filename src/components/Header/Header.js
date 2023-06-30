import React from "react";
import "./Header.scss";
import profile from "../../Static/Images/profile_deepak.jpeg";
import { NavLink, useLocation } from "react-router-dom";

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
          <NavLink to="https://docs.google.com/document/d/1O3_V0ckxxlOcKpWDnX5I9DjWv78ZxsjnR6PsIl1Wz3I/edit" target="_blank">
            Download Resume
          </NavLink>
        </div>
      </div>
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
