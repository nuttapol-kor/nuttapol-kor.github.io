import React from "react";
import "./home.css";
import Header from "./header";
import Body from "./body";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
    </div>
  );
}

export default Home;
