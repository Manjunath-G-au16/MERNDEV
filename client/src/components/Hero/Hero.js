import React from "react";
import "./style.scss";
import { gsap } from "gsap";
import { CSSRulePlugin, cssRule } from "gsap/all";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/mobile.png";
import img3 from "../../assets/download.png";
import img from "../../assets/Modimanju.jpg";
import { SkillItems } from "./SkillItems";
import { ProjectItems } from "./ProjectItems";
import { ProfileItems } from "./ProfileItems";
import img2x from "../../assets/pavan.jpg";
import img8 from "../../assets/koushik.jpg";
import img3x from "../../assets/sham.jpg";
import img4 from "../../assets/vyshak 2edit3.jpg";
import img5 from "../../assets/kush.jpg";
import img6 from "../../assets/ot.jpeg";
const Hero = () => {
  let rows = [];
  for (let i = 0; i < 650; i++) {
    rows.push(<div className="box">1</div>);
  }
  let rowsM = [];
  for (let i = 0; i < 150; i++) {
    rowsM.push(<div className="boxM">1</div>);
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

    // gsap.fromTo("#xrt",{y:0},{y:"-40vh",duration:2,delay:1.5});
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
    gsap.to(".boxM", {
      duration: 1.5,
      scale: 0.9,
      ease: "power1.inOut",
      repeat: 1,
      repeatDelay: 3,
      yoyo: true,
      stagger: {
        each: 0.1,
        from: "edges",
        grid: "auto",
      },
    });
    gsap.to(".boxM", {
      delay: 3,
      scale: 1,
      // background:"#fff",
    });
    
    gsap.to(".xyzM", {
      delay: 3.6,
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
    if (window.innerWidth > 620) {
      gsap.fromTo("#sec1", { scaleX: 0 }, { scaleX: 1, duration: 2 });
    } 
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
      border: "3px solid #fff",
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
    // gsap.from("#xrt", {
    //   scrollTrigger: {
    //     trigger: "#sec1",
    //     start: "top top",
    //     scrub: 3,
    //     // pin: "#container",
    //     // end: "bottom top",
    //   },
    //   y: 0,
    //   // ease: "Expo.easeInOut",
    // });
    gsap.to("#m1,#ms1,#ms2,#m3", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      y: "-85vh",
      // ease: "Expo.easeInOut",
    });
    gsap.to("#m3", {
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        scrub: 3,
        // pin: "#container",
        // end: "bottom top",
      },
      y: "-80vh",
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
    // gsap.to("#ps1,#ps2", {
    //   scrollTrigger: {
    //     trigger: "#sec1",
    //     start: "top top",
    //     scrub: 3,
    //     // pin: "#container",
    //     // end: "bottom top",
    //   },
    //   scale: 0.6,
    //   // ease: "Expo.easeInOut",
    // });
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
      <br />
      <br />
      <br />
      <div id="main">
        <div id="sec1">
          <div className="abc">
            <h1>DEV PORTFOLIO</h1>
          </div>
          <div className="xyz">{rows}</div>
          <div className="xyzM">{rowsM}</div>
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
              <div id="ps1">
                <img src={img1} alt="" className="img-1" />
                <div className="content">
                  <div className="s1">
                    <h3>SKILLS</h3>
                  </div>
                  <div className="s2">
                    {SkillItems.map((item, index) => {
                      return (
                        <>
                          <div className="c1" id="ms1">
                            <i className={item.skill}></i>
                          </div>
                          <div className="c2" id="ms2">
                            <progress value={item.value} max="10"></progress>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div id="ps2">
                <img src={img1} alt="" className="img-1" />
                <div className="content">
                  <div className="s1">
                    <h3>PROJECTS</h3>
                  </div>
                  <div className="s2">
                    {ProjectItems.map((item, index) => {
                      return (
                        <>
                          <div className="c" id="m3">
                            <div className="s">
                              <a href={item.link} target="_blank">
                                <img src={item.pic} alt="" />
                              </a>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div id="psc">
                <img src={img1} alt="" className="img-1" />
                <div className="content">
                  <div className="inner" id="m1">
                    <div className="sec1">
                      <div className="inner">
                        <img src={img3} alt="" />
                      </div>
                    </div>
                    <div className="sec2">
                      <h5>Hi I'm Manunath G</h5>
                      <h5>FullStack Developer</h5>
                    </div>
                    <div className="sec3">
                      <div className="panel1">
                        <h4>
                          <i className="fas fa-map-marker-alt"></i>
                          Bangalore,India
                        </h4>
                        <h5>
                          <i className="fas fa-envelope"></i>
                          modimanju2019@gmail.com
                        </h5>
                        <h5>
                          <i className="fas fa-phone"></i> 7348933532
                        </h5>
                      </div>
                      <div className="panel2">
                        <div className="icons">
                          <li>
                            <a href="" target="_blank">
                              <span className="fas fa-envelope"></span>
                            </a>
                          </li>
                          <li>
                            <a href="" target="_blank">
                              <span className="fas fa-envelope"></span>
                            </a>
                          </li>
                          <li>
                            <a href="" target="_blank">
                              <span className="fas fa-envelope"></span>
                            </a>
                          </li>
                        </div>
                      </div>
                    </div>
                    <div className="sec4">
                      {ProfileItems.map((item, index) => {
                        return (
                          <>
                            <div className="secx" id="pcard">
                              <div className="profilex">
                                <div className="content1x">
                                  <div className="innerx">
                                    <img src={item.pic} alt="" />
                                  </div>
                                </div>
                                <div className="content2x">
                                  <div className="innerx">
                                    <div className="contentx">
                                      <h5>{item.name}</h5>
                                      <h5>{item.email}</h5>
                                      <h5>{item.phone}</h5>
                                      <h5>{item.work}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
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
        <div id="honey">
          <ul className="honeycomb">
            <li className="honeycomb-cell">
              <img src={img} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Modimanju <h6>FullStack Developer</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img2x} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Pavan S <h6>Frontend UI/UX</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img4} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Vyshak <h6>Developer</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img3x} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Shaman Gowda <h6>Developer</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img6} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Rithesh<h6>Backend Developer</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img8} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Koushik MR<h6>Frontend Developer</h6></div>
            </li>
            <li className="honeycomb-cell">
              <img src={img5} alt="" className="honeycomb-cell-img" />
              <div className="honeycomb-cell_title">Kushal <h6>UI/UX</h6></div>
            </li>
          </ul>
        </div>
        <div id="footer">
          <div className="footer">
          <div className="f1">
            <div className="text">Follow Me</div>
            <div className="social">
              <a href="https://github.com/Manjunath-G-au16" target="_blank">
                <i class="fab fa-github"></i>
              </a>
              <a href="https://codepen.io/Modimanju" target="_blank">
                <i class="fab fa-codepen"></i>
              </a>
              <a href="https://www.instagram.com/ig_modimanju/" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div></div>
            <div className="logo">MERNDEV PORTFOLIO</div>
            <div className="copyright">© 2021 Modimanju</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
