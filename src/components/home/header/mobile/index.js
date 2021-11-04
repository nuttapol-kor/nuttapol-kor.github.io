import React from "react";
import "./mobile.css";
import {
  AiOutlineClose,
  AiOutlineCode,
  AiOutlineContacts,
} from "react-icons/ai";
import { MdWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineClose />
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#projects">
            <div className="option-icon">
              <MdWorkOutline />
              Projects
            </div>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#skills">
            <div className="option-icon">
              <AiOutlineCode />
              Skills
            </div>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#education">
            <div className="option-icon">
              <FaGraduationCap />
              Education
            </div>
          </a>
        </div>
        <div className="mobile-option">
          <a href="#contact">
            <div className="option-icon">
              <AiOutlineContacts />
              Contact
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
