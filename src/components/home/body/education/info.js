import React from "react";
import "./info.css";

function Info({ info }) {
  return (
    <div className="info">
      <div className="info-icon">
        <img className="info-img" src={info.icon} alt="icon" />
      </div>
      <div className="info-right">
        <label className="info-title">{info.institute}</label>
        <p className="info-period">{info.period}</p>
        <p className="info-gpa">GPA: {info.gpa}</p>
      </div>
    </div>
  );
}

export default Info;
