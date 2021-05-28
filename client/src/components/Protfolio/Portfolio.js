import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Portfolio.scss";
import { gsap } from "gsap";

const Portfolio = () => {
  // // Gsap
  // gsap.fromTo("#port-con",{rotateY:"65deg",scale:0.63,x:"-19vw",y:"-3vh"},{rotateY:"0",scale:1,x:"0",y:"0",duration:7,delay:5});
  // // gsap.fromTo(".port-p1",{z:"20vw",x:"5vw",y:"0vh"});
  // gsap.fromTo(".port-p2",{z:"10vw",x:"12vw",y:"-10vh"},{z:0,x:0,y:0,duration:5,delay:5});
  // gsap.fromTo(".port-p4",{z:"20vw",x:"13vw"},{z:0,x:0,duration:5,delay:5});
  // gsap.fromTo(".port-p3",{z:"18vw",x:"10vw",y:"11vh"},{z:0,x:0,y:0,duration:5,delay:5});
  // gsap.fromTo(".port-p6",{z:"25vw",x:"30vw",y:"15vh"},{z:0,x:0,y:0,duration:5,delay:5});
  // gsap.fromTo(".port-p5",{z:"50vw",x:"40vw"},{z:0,x:0,duration:5,delay:5});
  // gsap.fromTo("#skill",{z:"50vw",x:"40vw"},{z:0,x:0,duration:5,delay:5});
  // gsap.fromTo("#project",{z:"50vw",y:"-40vh"},{z:0,y:0,duration:2,delay:7.5});

  //////////////////////////////
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [project, setProject] = useState([]);
  const [social, setSocial] = useState([]);
  const [skill, setSkill] = useState([]);
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);
      setProject(data.projects);
      setSocial(data.socials);
      setSkill(data.skills);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };
  const updateWork = (id) => {
    const newWork = prompt("Enter Work");
    fetch("/update", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newWork: newWork, id: id }),
    });
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div id="port-main">
        <br />
        <br />
        <br />
        <div id="port-con">
          <div className="port-panel port-p1">
            <div className="inner">
              <div className="p1-sec1">
                <div className="content1">
                  <div className="inner">
                    <img src={userData.pic} alt="" />
                  </div>
                </div>
                <div className="content2">
                  <div className="panel1">
                    <h5>
                      Hi I'm <span>{userData.name}</span>
                    </h5>
                    <h5>{userData.work}</h5>
                  </div>
                  <div className="panel2">
                    <h1>
                      <a href="/photo/2015/04/23/22/00/tree-736885__480.jpg"  download="modimanju.pdf" target="_blank">
                      <i class="fas fa-cloud-download-alt"></i>
                      </a>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="p1-sec2">
                <div className="content">
                  <div className="sec1">
                    <h4>
                      <i class="fas fa-map-marker-alt"></i> Bangalore,India
                    </h4>
                    <h5>
                      <i class="fas fa-envelope"></i> {userData.email}
                    </h5>
                    <h5>
                      <i class="fas fa-phone"></i> {userData.phone}
                    </h5>
                  </div>
                  <div className="sec2">
                    <div className="icons">
                      {social.map((item) => {
                        return (
                          <li>
                            <a href={item.link} target="_blank">
                              <span className={item.media}></span>
                            </a>
                          </li>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="port-panel port-p2">
            <div className="inner">
              <div className="content">
                <h3>portfolio</h3>
              </div>
            </div>
          </div>

          <div className="port-panel port-p4">
            <div className="inner">
              <div className="content1">
                <h3>about</h3>
              </div>
              <div className="content2"></div>
            </div>
          </div>
          <div className="port-panel port-p3">
            <div className="inner">
              <div className="content1">
                <h3>SKILLS</h3>
              </div>
              <div className="content2" id="skill">
                {skill.map((item) => {
                  return (
                    <>
                      <div className="sec1" id="skillName">
                        <h3>{item.skill} :</h3>
                        {/* <i className={item.skill}></i> */}
                      </div>
                      <div className="sec2">
                        <progress
                          id="bar"
                          value={item.value}
                          max="10"
                        ></progress>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="port-panel port-p5">
            <div className="inner">
              <div className="content1">
                <h3>work/experience</h3>
              </div>
              <div className="content2"></div>
            </div>
          </div>
          <div className="port-panel port-p6">
            <div className="inner">
              <div className="content1">
                <h3>projects</h3>
              </div>
              <div className="content2">
                {project.map((item) => {
                  return (
                    <div className="section" id="project">
                      <div className="project">
                        <a href={item.url} target="_blank">
                          <img src={item.projectpic} alt="" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
