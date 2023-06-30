import React from "react";
import "./Contact.scss";
import { IoMdContact } from "react-icons/io";
import { BsFillPhoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaLocationArrow } from "react-icons/fa";
import {AiFillLinkedin,AiFillGithub} from "react-icons/ai"
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="page-container">
      <div className="page-icon">
        <IoMdContact />
      </div>
      <div className="contact-info">
        <h3>Get in touch</h3>
        <div className="item">
          <GrMail/>
          <a href="mailto:nikhilkorane08@gmail.com"
          > <span>nikhilkorane08@gmail.com</span></a>
        </div>
        <div className="item">
          <BsFillPhoneFill/>
          <a href="tel:9595756168"><span>+91 9595756168</span></a>
        </div>
        <div className="item">
          <FaLocationArrow />
          <span>1352, A ward, Near Rankala lake, Kolhapur, 416010</span>
        </div>
      </div>
      <div className="social-icons">
        <Link
          className="icon"
          to={"https://www.linkedin.com/in/deepak-korane-63b97a18b/"}
          target="_blank"
        >
          <AiFillLinkedin />
        </Link>
        <Link className="icon" to={"https://github.com/Nikhil18-9192"} target="_blank">
          <AiFillGithub />
        </Link>
        
      </div>
    </div>
  );
}

export default Contact;
