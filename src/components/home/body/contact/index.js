import React from "react";
import "./contact.css";
import Separator from "../../../common/separator/index";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title">Contact</label>
      <div className="contact-container">
        <div className="contact-top">
          <div className="contact-col">
            <label className="contact-top-title">Email</label>
            <a
              className="contact-link"
              href="mailto:nuttapol.korcharoenrat@gmail.com"
            >
              nuttapol.korcharoenrat@gmail.com
            </a>
          </div>
          <div className="contact-col">
            <label className="contact-top-title">Resume</label>
            <a
              className="contact-link"
              href="https://drive.google.com/file/d/1r4FFnx1yP8TlzL_nrkYjG-520zMiZacg/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              click here to download
            </a>
          </div>
        </div>
        <div className="contact-buttom">
          <a
            className="social-icon"
            href="https://github.com/nuttapol-kor"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            className="social-icon"
            href="https://www.linkedin.com/in/nuttapol-korcharoenrat-18b1b7223/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/natapol.korcharoenratt/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
