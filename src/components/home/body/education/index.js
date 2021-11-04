import React from "react";
import { AboutData } from "../../../../data/about";
import "./education.css";
import Info from "./info";
import Separator from "../../../common/separator/index";

function Education() {
  const data = AboutData;
  return (
    <div className="Education">
      <Separator />
      <label className="section-title">Education</label>
      <div className="about-section">
        <div className="about-info">
          {data.map((info) => {
            return <Info info={info} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Education;
