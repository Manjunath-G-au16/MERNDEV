import React from "react";
import "./style.scss";
import { gsap } from "gsap";
// import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  let rows = [];
  for (let i = 0; i < 650; i++) {
    rows.push(<div className="box">1</div>);
  }
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".box", {
      duration: 1,
      scale: 0.9,
      ease: "power1.inOut",
      repeat: 1,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "edges",
        grid: "auto",
      },
    });
    gsap.to(".box", {
      delay: 6,
      scale: 1,
      // background:"#fff",
    });

    gsap.to(".xyz", {
      delay: 6.5,
      background: "none",
    });
    gsap.to(".xyz", {
      delay: 10.6,
      display: "none",
    });
    // gsap.to("#center", {
    //   y: "-50px",
    //   scrub: 3,
    //   delay: 0.5,
    // });

    gsap.to("#left,#right", {
      y: "-50px",
      scrub: 3,
      delay: 0.7,
    });

    gsap.to("#center", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        pin: "#container",
        // end: "bottom top",
      },
      scaleX: 3,
      // ease: "Expo.easeInOut",
    });
    gsap.to("#left", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
      },
      x: "-500px",
      opacity: 0,
      display: "none",
      // ease: "Expo.easeInOut",
    });
    gsap.to("#right", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
      },
      x: "500px",
      opacity: 0,
      display: "none",
      // ease: "Expo.easeInOut",
    });
  }, []);
  return (
    <>
      <div id="main">
        <div id="sec1">
          <div className="abc">
            <h1>DEV PORTFOLIO</h1>
          </div>
          <div className="xyz">{rows}</div>
        </div>
        <div id="container">
          <div id="left">
            <div id="img-1" className="img-container"></div>
            <div className="section left">
              <div id="img-2" className="img-container"></div>
              <div id="img-3" className="img-container"></div>
            </div>
          </div>
          <div id="center" className="section center"></div>
          <div id="right">
            <div className="section right">
              <div id="img-4" className="img-container"></div>
              <div id="img-5" className="img-container"></div>
            </div>
            <div id="img-6" className="img-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
