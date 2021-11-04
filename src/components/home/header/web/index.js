import React from "react";
import "./web.css";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineCode, AiOutlineContacts } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";

function Web() {
  return (
    <div className="web">
      <div className="web-option">
        <a href="#projects">
          <div className="option-icon">
            <MdWorkOutline />
            Projects
          </div>
        </a>
      </div>
      <div className="web-option">
        <a href="#skills">
          <div className="option-icon">
            <AiOutlineCode />
            Skills
          </div>
        </a>
      </div>
      <div className="web-option">
        <a href="#education">
          <div className="option-icon">
            <FaGraduationCap />
            Education
          </div>
        </a>
      </div>
      <div className="web-option">
        <a href="#contact">
          <div className="option-icon">
            <AiOutlineContacts />
            Contact
          </div>
        </a>
      </div>
    </div>
  );
}

export default Web;
