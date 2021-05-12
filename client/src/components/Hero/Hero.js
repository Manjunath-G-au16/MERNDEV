import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <>
      <div id="back">
        <div id="sec1"></div>
        <div id="container">
          <div id="img-1" className="img-container"></div>
          <div className="section left">
            <div id="img-2" className="img-container"></div>
            <div id="img-3" className="img-container"></div>
          </div>
          <div className="section center"></div>
          <div className="section right">
            <div id="img-4" className="img-container"></div>
            <div id="img-5" className="img-container"></div>
          </div>
          <div id="img-6" className="img-container"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
