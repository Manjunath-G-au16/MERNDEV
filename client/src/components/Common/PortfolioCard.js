import React from "react";

const PortfolioCard = (props) => {
  return (
    <>
      <div id="port-main">
        <br />
        <br />
        <br />
        <div id="port-con">
          <div className="port-panel port-p1">
            <div className="inner">
            <div id="pdf-btn">
              <button onClick={props.onPdf}><i className={props.pdfIcon}></i></button>
            </div>
              <div className="p1-sec1">
                <div className="content1">
                  <div className="inner">
                    <img src={props.pic} alt="" />
                  </div>
                </div>
                <div className="content2">
                  <div className="panel1">
                    <h5>
                      Hi I'm <span>{props.name}</span>
                    </h5>
                    <h5>{props.work}</h5>
                  </div>
                  <div className="panel2">
                    <h1>
                      <i class={props.icon} onClick={props.onClick}></i>
                    </h1>
                  </div>
                </div>
              </div>
              <div className="p1-sec2">
                <div className="content">
                  <div className="sec1">
                    <h4>
                      <i className="fas fa-map-marker-alt"></i> Bangalore,India
                    </h4>
                    <h5>
                      <i className="fas fa-envelope"></i> {props.email}
                    </h5>
                    <h5>
                      <i className="fas fa-phone"></i> {props.phone}
                    </h5>
                  </div>
                  <div className="sec2">
                    <div className="icons">
                      {props.social.map((item) => {
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
              <div className="content">
                <h3>about</h3></div>
              </div>
              <div className="content2">
              <p>{props.about}</p>
                    {/* <p>
                      I enjoy taking Complex problems and turing them into
                      simple & beautiful interface designs. I also love the
                      logic and structure of coding and always strive to write
                      elegant and efficient code,whether it be React, Scss or
                      Nodejs
                    </p>
                    <p>When I'm not coding or creating pixels, you'll find me in gym or
                     on the battle ground in virtual reality!</p> */}
              </div>
            </div>
          </div>
          <div className="port-panel port-p3">
            <div className="inner">
              <div className="content1">
              <div className="content">
                <h3>SKILLS</h3>
              </div>
              </div>
              <div className="content2" id="skill">
                {props.skill.map((item) => {
                  return (
                    <>
                      <div className="sec1" id="skillName">
                        <i className={item.skill}></i>
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
              <div className="content">
                <h3>work/experience</h3></div>
              </div>
              <div className="content2">
              <p>{props.exp}</p>
          
                    {/* <p>FrontEnd Developer:  &nbsp; 2+ years</p>
                    <p>FullStack Developer: &nbsp; 6+ months</p> */}
              </div>
            </div>
          </div>
          <div className="port-panel port-p6">
            <div className="inner">
              <div className="content1">
              <div className="content">
                <h3>projects</h3></div>
              </div>
              <div className="content2">
                {props.project.map((item) => {
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

export default PortfolioCard;
