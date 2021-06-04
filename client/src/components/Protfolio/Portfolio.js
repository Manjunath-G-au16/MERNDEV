import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Portfolio.scss";
import { gsap } from "gsap";
import { saveAs } from "file-saver";
import PortfolioCard from "../Common/PortfolioCard";
import Modal from "react-modal";

const Portfolio = () => {
  // var FileSaver = require('file-saver');
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
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    id: "",
    pic: "",
  });
  const [project, setProject] = useState([]);
  const [social, setSocial] = useState([]);
  const [skill, setSkill] = useState([]);
  const [active, setActive] = useState("second");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [activeUpload, setActiveUpload] = useState("");

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
      setUserData({
        ...userData,
        pic: data.pic,
        name: data.name,
        email: data.email,
        phone: data.phone,
        work: data.work,
        pic: data.pic,
        id: data._id,
      });
      setProject(data.projects);
      setSocial(data.socials);
      setSkill(data.skills);
      setUpic(data.pic);
      setPic(data.pic);
      setProfileId(data._id);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  //Pic Upload to Cloudinary
  const [image, setImage] = useState("");
  const [picc, setPic] = useState("");
  const [upic, setUpic] = useState("");
  const updatePic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "merndev");
    data.append("cloud_name", "modimanju");
    fetch("https://api.cloudinary.com/v1_1/modimanju/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.secure_url);
        setPic(data.secure_url);
        setUpic(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("pic:", picc);
  };
  //Add Skills
  const [sskill, setSSkill] = useState("");
  const [svalue, setSValue] = useState("");
  const handleSkill = (e) => {
    const skillData = document.getElementById("skillData").value;
    const skillData_val = document.querySelector(
      "#skill-data" + " option[value='" + skillData + "']"
    ).dataset.value;

    setSSkill(skillData_val);
  };

  const handleValue = (e) => {
    setSValue(e.target.value);
  };
  //sending data to backend
  const addSkill = async () => {
    // e.preventDefault();
    const skill = sskill;
    const value = svalue;
    const res = await fetch("/skill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        skill,
        value,
      }),
    });
    const data = await res.json();

    if (!data) {
      console.log("Skills not sent");
    } else {
      alert("Skills sent");
    }
  };
  //Delete Skill
  const [profileId, setProfileId] = useState("");
  const [skillId, setSkillId] = useState("");

  const refresh = () => {
    callAboutPage();
  };
  const delSkill = async () => {
    console.log("clicked");
    const pid = profileId;
    const sid = skillId;
    try {
      const res = await fetch("/deleteskill", {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pid,
          sid,
        }),
      });
      const data = await res.json();

      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  //sending data to backend
  const updateForm = (e) => {
    e.preventDefault();
    const { name, email, phone, work, id } = userData;
    const pic = picc;
    // const cv = cvv;
    // const messages = msg;
    // const pic = data.url;
    console.log(userData);
    setActive("first");

    fetch("/edit", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // cv,
        pic,
        name,
        email,
        phone,
        work,
        id,
        // messages,
      }),
    });
  };
  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      {active === "first" && (
        <PortfolioCard
          pic={userData.pic}
          name={userData.name}
          work={userData.work}
          email={userData.email}
          phone={userData.phone}
          social={social}
          skill={skill}
          project={project}
          onClick={() => {
            setActive("second");
          }}
        />
      )}
      {active === "second" && (
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
                        <img src={upic} alt="" />
                        <label htmlFor="file">
                          <i className="fas fa-camera"></i>
                        </label>

                        {/* {activeUpload === "second" && ( */}
                        <button
                          id="upload"
                          onClick={() => {
                            updatePic(userData._id);
                          }}
                        >
                          <i className="fas fa-upload"></i>
                        </button>
                        {/* )} */}
                      </div>
                    </div>
                    <div id="imgup">
                      <input
                        type="hidden"
                        className="input"
                        name="pic"
                        value={userData.pic}
                        onChange={handleInputs}
                        placeholder="pic"
                      />
                      <input
                        type="file"
                        id="file"
                        className="input"
                        name="file"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="content2">
                      <div className="panel1">
                        <h5>
                          <input
                            type="text"
                            className="input"
                            id="input-field"
                            name="name"
                            value={userData.name}
                            onChange={handleInputs}
                            placeholder="name"
                          />
                        </h5>
                        <h5>
                          <input
                            type="text"
                            className="input"
                            id="input-field"
                            name="work"
                            value={userData.work}
                            onChange={handleInputs}
                            placeholder="work"
                          />
                        </h5>
                      </div>
                      <div className="panel2">
                        {/* <h1>
                          <a href="" download target="_blank">
                            <i className="fas fa-cloud-download-alt"></i>
                          </a>
                        </h1> */}
                      </div>
                    </div>
                  </div>
                  <div className="p1-sec2">
                    <div className="content">
                      <div className="sec1">
                        <h4>
                          <i className="fas fa-map-marker-alt"></i>{" "}
                          Bangalore,India
                        </h4>
                        <h5>
                          <i className="fas fa-envelope"></i>&nbsp;
                          <input
                            type="email"
                            className="input"
                            id="input-field"
                            name="email"
                            value={userData.email}
                            onChange={handleInputs}
                            placeholder="email"
                          />
                        </h5>
                        <h5>
                          <i className="fas fa-phone"></i>&nbsp;
                          <input
                            type="phone"
                            className="input"
                            id="input-field"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputs}
                            placeholder="phone"
                          />
                        </h5>
                        <button id="btn" onClick={updateForm}>
                          Save
                        </button>
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

                    <div className="modal">
                      <button onClick={() => setModalIsOpen(true)}><i className="fas fa-plus"></i></button>
                      <Modal
                        isOpen={modalIsOpen}
                        className="Modal"
                        overlayClassName="Overlay"
                      >
                        <div className="cbtn">
                          <button onClick={() => setModalIsOpen(false)}>
                          <i className="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="skill">
                        <div className="sec1">
                          <h1>Choose Skill</h1>
                        <input
                          list="skill-data"
                          id="skillData"
                          onChange={handleSkill}
                          name="xxyz"
                        />
                        <datalist id="skill-data">
                          <option
                            data-value="fab fa-python"
                            value="Python"
                          ></option>
                          <option
                            data-value="fab fa-js-square"
                            value="Javascript"
                          ></option>
                          <option data-value="fab fa-php" value="PHP"></option>
                          <option
                            data-value="fab fa-html5"
                            value="Html5"
                          ></option>
                          <option
                            data-value="fab fa-css3-alt"
                            value="Css3"
                          ></option>
                          <option
                            data-value="fab fa-sass"
                            value="Sass"
                          ></option>
                          <option
                            data-value="fab fa-react"
                            value="React Js"
                          ></option>
                          <option
                            data-value="fab fa-node-js"
                            value="Node Js"
                          ></option>
                          <option
                            data-value="devicon-mongodb-plain"
                            value="Mongo DB"
                          ></option>
                          <option
                            data-value="devicon-android-plain"
                            value="Android"
                          ></option>
                          <option
                            data-value="devicon-angularjs-plain"
                            value="Angular"
                          ></option>
                          <option
                            data-value="devicon-babel-plain"
                            value="Bable"
                          ></option>
                          <option
                            data-value="devicon-c-plain"
                            value="C lang"
                          ></option>
                          <option
                            data-value="devicon-cplusplus-plain"
                            value="C++ lang"
                          ></option>
                          <option
                            data-value="devicon-csharp-plain"
                            value="C# sharp"
                          ></option>
                          <option
                            data-value="devicon-django-plain"
                            value="Django"
                          ></option>
                          <option
                            data-value="devicon-express-original"
                            value="Express JS"
                          ></option>
                        </datalist>
                        
                        </div>
                        <div className="sec2">
                        <input
                          name="value"
                          type="range"
                          min="1"
                          max="10"
                          step="1"
                          defaultValue="5"
                          onChange={handleValue}
                          placeholder="value"
                        /></div>
                        </div>
                        <div className="abtn">
                        <button onClick={addSkill}>Add</button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <div className="content2" id="skill">
                    {skill.map((item) => {
                      return (
                        <>
                          <div className="sec1" id="skillName">
                            {/* <h3>{item.skill} :</h3> */}
                            <i className={item.skill}></i>
                            <i
                              className="fas fa-trash"
                              onMouseEnter={() => {
                                setSkillId(item._id);
                              }}
                              onClick={() => {
                                delSkill();
                                refresh();
                              }}
                            ></i>
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
      )}
    </>
  );
};

export default Portfolio;
