import React from "react";
import "./styleSec2.scss";
import { gsap } from "gsap";
import { CSSRulePlugin, cssRule } from "gsap/all";
// import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Sec2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      "#ds1",
      { x: "-50vw" },
      { x: 0, duration: 1.5, delay: 1, ease: "power3.inOut" }
    );
    gsap.fromTo(
      ".b",
      { width: 0 },
      { width: "25vw", duration: 1.5, delay: 2, ease: "power3.inOut" }
    );

    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        markers: true,
        snap: 1,
        pin: true,
        pinSpacing: false,
      });
    });

    gsap.to(".x2", {
      scrollTrigger: {
        trigger: ".p1",
        start: "top +=50",
        scrub: 3,
      },
      width: "25vw",
      ease: "power3.inOut",
    });
    gsap.to(".x3", {
      scrollTrigger: {
        trigger: ".p2",
        start: "top +=50",
        scrub: 3,
      },
      width: "25vw",
      ease: "power3.inOut",
    });
    gsap.to(".x4", {
      scrollTrigger: {
        trigger: ".p3",
        start: "top +=50",
        scrub: 3,
      },
      width: "25vw",
      ease: "power3.inOut",
    });
    gsap.fromTo(
      ".head-h",
      { opacity: 0 },
      { opacity: 1, duration: 1.5, delay: 2, ease: "power3.inOut" }
    );
    gsap.fromTo(
      ".head-h",
      { x: "25vw" },
      { x: 0, duration: 1.5, delay: 3, ease: "power3.inOut" }
    );
  });
  return (
    <>
      <div id="dpc">
        <div id="ds1">
          <div className="dsb b1">
            <div className="b x1" id="xxxx">
              <div className="head-h">
                <h1>Text1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, accusamus. Ratione esse in ex ea eaque dolorem.
                </p>
              </div>
            </div>
          </div>
          <div className="dsb b2">
            <div className="b x2">
              <h1>Text2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, accusamus. Ratione esse in ex ea eaque dolorem.
              </p>
            </div>
          </div>
          <div className="dsb b3">
            <div className="b x3">
              <h1>Text3</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, accusamus. Ratione esse in ex ea eaque dolorem.
              </p>
            </div>
          </div>
          <div className="dsb b4">
            <div className="b x4">
              <h1>Text4</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, accusamus. Ratione esse in ex ea eaque dolorem.
              </p>
            </div>
          </div>
        </div>
        <div id="ds2">
          <div className="panel p1">MERNDEV</div>
          <div className="panel p2">MERNDEV</div>
          <div className="panel p3">MERNDEV</div>
          <div className="panel p4">MERNDEV</div>
        </div>
      </div>
    </>
  );
};

export default Sec2;
