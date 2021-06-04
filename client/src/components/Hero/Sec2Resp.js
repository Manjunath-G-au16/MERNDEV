import React from "react";
import "./styleSec2r.scss";
import { gsap } from "gsap";
import { CSSRulePlugin, cssRule } from "gsap/all";
// import { useRef } from "react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Sec2Resp = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    let sections = gsap.utils.toArray(".rpanel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".r-p",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".r-p").offsetWidth
      }
    });
  });
  return (
    <>
        <div className="rcon">
            <div className="r-p">
              <div className="rpanel r-p1">MERNDEV</div>
              <div className="rpanel r-p2">MERNDEV</div>
              <div className="rpanel r-p3">MERNDEV</div>
              <div className="rpanel r-p4">MERNDEV</div>
              
            </div>
        </div>
    </>
  );
};

export default Sec2Resp;
