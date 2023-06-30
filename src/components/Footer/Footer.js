import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Experience", link: "/experience" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Technologies", link: "/technologies" },
    { name: "Contact", link: "/contact" },
  ];
  return (
    <div className="footer-container">
      <div className="menu">
        {menuItems.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="social-icons">
        <Link
          to={"https://www.linkedin.com/in/deepak-korane-63b97a18b/"}
          target="_blank"
        >
          <AiFillLinkedin target="_blank" />
        </Link>
        <Link to={"https://github.com/Nikhil18-9192"} target="_blank">
          <AiFillGithub />
        </Link>
        {/* <Link to={"https://www.linkedin.com/in/deepak-korane-63b97a18b/"} target="_blank"><AiFillInstagram /></Link>
        <Link to={"https://www.linkedin.com/in/deepak-korane-63b97a18b/"} target="_blank"><AiFillFacebook /></Link> */}
      </div>
      <div className="footer-text">
        <p>© 2023 Deepak Korane. All rights reserved.</p>
        <p>
          This portfolio was made with <span style={{ color: "red" }}>❤️</span>{" "}
          using ReactJs.
        </p>
      </div>
    </div>
  );
}

export default Footer;
