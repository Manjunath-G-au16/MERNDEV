import React from "react";
import "./style.scss";
import { gsap } from "gsap";
import { CSSRulePlugin, cssRule } from "gsap/all";
// import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  let rows = [];
  for (let i = 0; i < 650; i++) {
    rows.push(<div className="box">1</div>);
  }

  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
  useEffect(() => {
    gsap.to(CSSRulePlugin.getRule(".center:before"), {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        pin: "#container",
      },
      cssRule: {
        scaleX: 3,
        background: "#fff",
        ease: "power1.inOut",
      },
    });

    gsap.to(".box", {
      duration: 1,
      scale: 0.9,
      ease: "power1.inOut",
      repeat: 1,
      repeatDelay: 2,
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
    // gsap.fromTo(
    //   "#ps1",
    //   {x:1000
    //   },
    //   { x:0,
    //   duration:5,}
    // );
    // gsap.fromTo(
    //   "#ps2",
    //   {x:-1000
    //   },
    //   { x:0,
    //   duration:5,}
    // );
    gsap.fromTo("#sec1", { scaleX: 0 }, { scaleX: 1, duration: 2 });
    gsap.fromTo("#psc,#ps1,#ps2", { y: 100 }, { y: 0, duration: 2, delay: 3 });
    gsap.fromTo(
      "#img-1,.left,.right,#img-6",
      {
        y: 100,
      },
      {
        stagger: 0.1,
        y: 0,
        duration: 4.5,
      }
    );

    gsap.fromTo(
      CSSRulePlugin.getRule(".center:before"),
      {
        cssRule: {
          y: 100,
        },
      },
      {
        cssRule: {
          y: 0,
        },
        duration: 1.5,
      }
    );
    // gsap.to(".xyz", {
    //   delay: 10.6,
    //   display: "none",
    // });
    // gsap.to("#center", {
    //   y: "-25vh",
    //   scrub: 3,
    //   delay: 2,
    // });

    // gsap.to("#left,#right", {
    //   y: "-50px",
    //   scrub: 3,
    //   delay: 0.7,
    // });
    gsap.to("#main", {
      scrollTrigger: {
        trigger: "#sec1",
        start: "top top",
        scrub: 3,
        // end: "bottom top",
      },
      background: "#000",
      ease: "power1.inOut",
    });
    gsap.to(".img-container", {
      scrollTrigger: {
        trigger: "#sec1",
        start: "top top ",
        scrub: 3,
        // end: "bottom top",
      },
      background: "#ffffff73",
      opacity:0.7,
      ease: "power1.inOut",
    });
    gsap.to("#psc,#left,#right", {
      scrollTrigger: {
        trigger: "#sec1",
        start: "top top",
        scrub: 5,
        // pin: "#container",
        // end: "bottom top",
      },
      scale: 0.8,
      // ease: "Expo.easeInOut",
    });
    gsap.from("#b2", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      visibility: "hidden",
      // ease: "Expo.easeInOut",
    });
    gsap.to("#b2", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 1,
        // pin: "#container",
        // end: "bottom top",
      },
      visibility: "visible",
      // ease: "Expo.easeInOut",
    });
    gsap.from("#ps1,#ps2", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      scale: 0.6,
      // ease: "Expo.easeInOut",
    });
    gsap.to("#ps1,#ps2", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      scale: 0.8,
      // ease: "Expo.easeInOut",
    });
    gsap.to("#ps1,#ps2", {
      scrollTrigger: {
        trigger: "#sec1",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      scale: 0.6,
      // ease: "Expo.easeInOut",
    });
    gsap.to("#ps2", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      x: "30vw",
      ease: "power1.inOut",
      // ease: "Expo.easeInOut",
    });
    // gsap.fromTo(
    //   "#ps2",
    //   {
    //     y: 100,
    //   },
    //   {
    //     y: 0,
    //     duration: 1,
    //     scrollTrigger: {
    //       trigger: "#container",
    //       start: "top top",
    //       pin: "#container",
    //     },
    //   }
    // );

    gsap.to("#ps1", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        pin: "#container",
        // end: "bottom top",
      },
      x: "-30vw",
      ease: "power1.inOut",
      // ease: "Expo.easeInOut",
    });

    gsap.to("#left", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        pin: "#container",
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
        pin: "#container",
      },
      x: "500px",
      opacity: 0,
      display: "none",
      // ease: "Expo.easeInOut",
    });
    // gsap.to("#center", {
    //   scrollTrigger: {
    //     trigger: "#container",
    //     start: "top top",
    //     scrub: 3,
    //     pin: "#container",
    //   },scaleX:3,
    //   // ease: "Expo.easeInOut",
    // });
  }, []);
  return (
    <>
    <br /><br /><br />
      <div id="main">
        <div id="sec1">
          <div className="abc">
            <h1>DEV PORTFOLIO</h1>
          </div>
          <div className="xyz">{rows}</div>
        </div>
        <div id="xxx">
          <div id="container">
            <div id="left">
              <div id="img-1" className="img-container"></div>
              <div className="section left">
                <div id="img-2" className="img-container"></div>
                <div id="img-3" className="img-container"></div>
              </div>
            </div>
            <div id="center" className="section center">
              <div id="ps1" ></div>
              <div id="ps2" ></div>
              <div id="psc" >
                {/* <div id="b1"><h1>BOX1</h1></div>
                <div id="b2"><h1>BOX2</h1></div> */}
              </div>
            </div>
            <div id="right">
              <div className="section right">
                <div id="img-4" className="img-container"></div>
                <div id="img-5" className="img-container"></div>
              </div>
              <div id="img-6" className="img-container"></div>
            </div>
          </div>
        </div>
        <div id="sec3">
          <h1>Section 3</h1>
        </div>
      </div>
    </>
  );
};

export default Hero;
