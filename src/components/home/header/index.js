import React, { useState } from "react";
import "./header.css";
import Web from "./web";
import Mobile from "./mobile";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">nuttapol.kor</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu />
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
