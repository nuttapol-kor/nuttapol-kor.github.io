import React from "react";
import "./hero.css";
import Typical from "react-typical";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="hero-info">
          Hello there 👋, My name is
          <br /> <span className="info-name"> Nuttapol Korcharoenrat. </span>
          <br /> I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "software engineer",
              2000,
              "student",
              2000,
              "person who has a passion for web development",
              5000,
            ]}
          />
        </div>
        <div className="hero-photo">
          <img
            src={require("../../../../assets/my-photo.jpg").default}
            className="picture"
            alt="myself"
          />
        </div>
      </div>
      {/* <h1>Hi, I'm Nuttapol Korcharoenrat</h1>
      <p>I'm a
        <Typical 
          loop={Infinity}
          wrapper="b"
          steps={[
            'developer',
            1000,
            'designer',
            1000,
            'Youtuber',
            1000
          ]}
        />
      </p> */}
    </div>
  );
}

export default Hero;
