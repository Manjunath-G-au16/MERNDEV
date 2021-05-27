import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Portfolio.scss";

const Portfolio = () => {
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
                  <h4>
                    Hi I'm <span>{userData.name}</span>
                  </h4>
                  <h4>{userData.work}</h4>
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
          <div className="port-panel port-p3">
            <div className="inner">
              <div className="content1">
                <h3>SKILLS</h3>
              </div>
              <div className="content2">
                {skill.map((item) => {
                  return (
                    <>
                      <div className="sec1">
                        <h3>{item.skill} :</h3>
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
          <div className="port-panel port-p4">
            <div className="inner">
              <div className="content1">
                <h3>about</h3>
              </div>
              <div className="content2"></div>
            </div>
          </div>
          <div className="port-panel port-p5">
            <div className="inner">
              <div className="content1">
                <h3>work/experience</h3>
              </div>
              <div className="content2"></div>
            </div></div>
          <div className="port-panel port-p6">
            <div className="inner">
              <div className="content1">
                <h3>projects</h3>
              </div>
              <div className="content2">
                {project.map((item) => {
                  return (
                    <div className="section">
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
