import React, { useEffect, useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./Portfolio.scss";
import "./Pdf.scss";
import { gsap } from "gsap";
import PortfolioCard from "../Common/PortfolioCard";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@progress/kendo-theme-material/dist/all.css";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Portfolio = () => {
  // var FileSaver = require('file-saver');
  // gsap.killTweensOf(".gift");
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
  const [active, setActive] = useState("first");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpenSocial, setModalIsOpenSocial] = useState(false);
  const [modalIsOpenProject, setModalIsOpenProject] = useState(false);
  const skillpdf = skill.slice(1, 2);
  const [activeUpload, setActiveUpload] = useState("");
  const [activeUpload2, setActiveUpload2] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const edit = () => {
    setActive("second");
  };
  const pimg = (e) => {
    setImage(e.target.files[0]);
    setActiveUpload("true");
  };
  const primg = (e) => {
    setImage2(e.target.files[0]);
    setActiveUpload2("true");
  };
  const pdfExportComponent = useRef(null);

  const pdf = () => {
    setActive("pdf");
  };
  const back = () => {
    setActive("first");
    callAboutPage();
  };

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const exit = () => {
    setModalIsOpen(true);
  };
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
        about: data.about,
        exp: data.exp,
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
  //Add projects

  //Pic Update
  const [image2, setImage2] = useState("");
  const [picc2, setPic2] = useState("");
  const [pjpic, setPjpic] = useState("");

  const updatePic2 = () => {
    const data = new FormData();
    data.append("file", image2);
    data.append("upload_preset", "merndev");
    data.append("cloud_name", "modimanju");
    fetch("https://api.cloudinary.com/v1_1/modimanju/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.secure_url);
        setPic2(data.secure_url);
        setPjpic(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("pic:", picc2);
  };
  const [urll, setUrll] = useState("");
  const [detailss, setDetailss] = useState("");
  const handleUrl = (e) => {
    setUrll(e.target.value);
  };
  const handleDetails = (e) => {
    setDetailss(e.target.value);
  };

  //sending data to backend
  const projectForm = async (e) => {
    e.preventDefault();
    const url = urll;
    const details = detailss;
    const projectpic = picc2;
    console.log(userData);
    const res = await fetch("/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectpic,
        url,
        details,
      }),
    });
    const data = await res.json();
    callAboutPage();
    if (res.status === 422 || !data) {
      toast.dark("Fill all the fields!");
    } else {
      toast.dark("Project added");
    }
  };
  //Add Socials
  const [socials, setSocials] = useState("");
  const [slink, setSLink] = useState("");
  const handleSocial = (e) => {
    setSocials(e.target.value);
  };
  const handleLink = (e) => {
    setSLink(e.target.value);
  };

  //sending data to backend
  const addSocial = async (e) => {
    e.preventDefault();
    const media = socials;
    const link = slink;
    const res = await fetch("/social", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        media,
        link,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      toast.dark("Fill all the fields!");
    } else {
      toast.dark("Socials added");
    }
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
    callAboutPage();

    if (res.status === 422 || !data) {
      toast.dark("Fill all the fields!");
    } else {
      toast.dark("Skills added");
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
  //Delete Project
  const [projectId, setProjectId] = useState("");
  const refreshProject = () => {
    callAboutPage();
  };
  const delProject = async () => {
    console.log("clicked");
    const pid = profileId;
    const sid = projectId;
    try {
      const res = await fetch("/deleteproject", {
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
  //Delete Social
  const [socialId, setSocialId] = useState("");
  const refreshSocial = () => {
    callAboutPage();
  };
  const delSocial = async () => {
    console.log("clicked");
    const pid = profileId;
    const sid = socialId;
    try {
      const res = await fetch("/deletesocial", {
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
  const updateForm = async () => {
    const { name, email, phone, work, id, about, exp } = userData;
    const pic = picc;
    console.log(userData);
    setActive("first");
    try {
      const res = await fetch("/edit", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pic,
          name,
          email,
          phone,
          work,
          id,
          about,
          exp,
        }),
      });
      const data = await res.json();
      callAboutPage();

      console.log(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  gsap.to("#project", { z: 0, y: 0, duration: 2, delay: 7.5 });
  useEffect(() => {
    // Gsap
    gsap.fromTo(
      "#port-con",
      { rotateY: "65deg", scale: 0.63, x: "-19vw", y: "-3vh" },
      { rotateY: "0", scale: 1, x: "0", y: "0", duration: 7, delay: 4 }
    );
    // gsap.fromTo(".port-p1",{z:"20vw",x:"5vw",y:"0vh"});
    gsap.fromTo(
      ".port-p2",
      { z: "10vw", x: "12vw", y: "-10vh" },
      { z: 0, x: 0, y: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(
      ".port-p4",
      { z: "20vw", x: "13vw" },
      { z: 0, x: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(
      ".port-p3",
      { z: "18vw", x: "10vw", y: "11vh" },
      { z: 0, x: 0, y: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(
      ".port-p6",
      { z: "25vw", x: "30vw", y: "15vh" },
      { z: 0, x: 0, y: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(
      ".port-p5",
      { z: "50vw", x: "40vw" },
      { z: 0, x: 0, duration: 4, delay: 4 }
    );
    gsap.fromTo(
      "#skill",
      { z: "50vw", x: "40vw" },
      { z: 0, x: 0, duration: 4, delay: 4 }
    );
    callAboutPage();
  }, []);
  return (
    <>
      {active === "pdf" && (
        <>
          <br />
          <br />
          <br />
          <div id="pdf-btn">
            <button onClick={back} className="b1">
              <i className="fas fa-chevron-circle-left"></i>
            </button>

            <button onClick={handleExportWithComponent} className="b2">
              <i className="fas fa-cloud-download-alt"></i>
            </button>
          </div>
          <PDFExport ref={pdfExportComponent} paperSize="A4">
            <div id="pdf">
              <div className="pdf-con">
                <div className="pdf-sec1">
                  <div className="pdf-con1">
                    <div className="pdf-s1">
                      <div className="pdf-c1">
                        <h3>Personal Details</h3>
                      </div>
                      <div className="pdf-c2">
                        <h5>Name: {userData.name}</h5>
                        <h5>Email: {userData.email}</h5>
                        <h5>Phone: {userData.phone}</h5>
                        <h5>Work: {userData.work}</h5>
                      </div>
                    </div>
                    <div className="pdf-s2">
                      <div className="pdf-c1">
                        <h3>Skills</h3>
                      </div>
                      <div className="pdf-c2">
                        {skill.map((item) => {
                          return (
                            <>
                              <div className="pdfs1">
                                <i className={item.skill}></i>
                              </div>
                              <div className="pdfs2">{item.value}</div>
                            </>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="pdf-con2"></div>
                </div>
                <div className="pdf-sec2">
                  <div className="pdf-con1">
                    <div className="pdf-s1">
                      <h3>RESUME</h3>
                    </div>
                    <div className="pdf-s2">
                      <h4>About:</h4>
                      <p>{userData.about}</p>
                      <h4>Experience:</h4>
                      <p>{userData.exp}</p>
                    </div>
                    <div className="pdf-s3">
                      <h4>Projects:</h4>
                      {project.map((item) => {
                        return (
                          <>
                            <p>{item.details}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                  <div className="pdf-con2"></div>
                </div>
              </div>
            </div>
          </PDFExport>
        </>
      )}
      {active === "first" && (
        <PortfolioCard
          pic={upic}
          name={userData.name}
          work={userData.work}
          email={userData.email}
          phone={userData.phone}
          about={userData.about}
          exp={userData.exp}
          social={social}
          skill={skill}
          project={project}
          icon={"fas fa-edit"}
          // onClick={() => {
          //   setActive("second");
          // }}
          onClick={edit}
          onPdf={pdf}
          pdfIcon="fas fa-file"
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

                        {activeUpload === "true" && (
                          <button
                            id="upload"
                            onClick={() => {
                              updatePic(userData._id);
                              setLoading(true);
                              setTimeout(() => {
                                setLoading(false);
                                setActiveUpload("false");
                              }, 2000);
                            }}
                          >
                            {loading && <i className="fas fa-sync fa-spin"></i>}
                            {!loading && <i className="fas fa-upload"></i>}
                          </button>
                        )}
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
                        onChange={pimg}
                        // onClick={setActiveUpload("second")}
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

                        <button
                          id="btn"
                          onClick={() => {
                            updateForm();
                          }}
                        >
                          Save
                        </button>
                      </div>
                      <div className="sec2">
                        <div className="abtn">
                          <button onClick={() => setModalIsOpenSocial(true)}>
                            <i className="fas fa-plus"></i>
                          </button>

                          <Modal
                            isOpen={modalIsOpenSocial}
                            className="Modal"
                            overlayClassName="Overlay"
                          >
                            <div className="cbtn">
                              <button
                                onClick={() => setModalIsOpenSocial(false)}
                              >
                                <i className="fas fa-times"></i>
                              </button>
                            </div>
                            <div className="skill">
                              <div className="sec1">
                                <select onChange={handleSocial}>
                                  <option value="">Select</option>
                                  <option value="fab fa-linkedin">
                                    Linkedin
                                  </option>
                                  <option value="fab fa-github">Github</option>
                                  <option value="fab fa-codepen">
                                    Codepen
                                  </option>
                                  <option value="fab fa-facebook-f">
                                    Facebook
                                  </option>
                                  <option value="fab fa-instagram">
                                    Instagram
                                  </option>
                                </select>
                              </div>
                              <div className="sec2">
                                <input
                                  type="text"
                                  className="input"
                                  name="link"
                                  onChange={handleLink}
                                  placeholder="link"
                                />
                              </div>
                            </div>
                            <div className="abtn">
                              <button onClick={addSocial}>Add</button>
                            </div>
                          </Modal>
                        </div>
                        <div className="icons">
                          {social.map((item) => {
                            return (
                              <li>
                                <a href={item.link} target="_blank">
                                  <span className={item.media}></span>
                                </a>

                                <i
                                  className="fas fa-trash"
                                  onMouseEnter={() => {
                                    setSocialId(item._id);
                                  }}
                                  onClick={() => {
                                    delSocial();
                                    refreshSocial();
                                  }}
                                ></i>
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
                  <div className="content2">
                    <textarea
                      className="about"
                      name="about"
                      value={userData.about}
                      onChange={handleInputs}
                      id="about"
                    ></textarea>
                    {/* <p>
                      I enjoy taking Complex problems and turing them into
                      simple & beautiful interface designs. I also love the
                      logic and structure of coding and always strive to write
                      elegant and efficient code,whether it be React, Scss or
                      Nodejs
                    </p>
                    <p>
                      When I'm not coding or creating pixels, you'll find me in
                      gym or on the battle ground in virtual reality!
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="port-panel port-p3">
                <div className="inner">
                  <div className="content1">
                    <h3>SKILLS</h3>

                    <div className="modal">
                      <button
                        // onClick={() => setModalIsOpen(true)}
                        onClick={exit}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
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
                              <option
                                data-value="fab fa-php"
                                value="PHP"
                              ></option>
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
                            />
                          </div>
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
                  <div className="content2">
                    <textarea
                      className="exp"
                      name="exp"
                      value={userData.exp}
                      onChange={handleInputs}
                      id="exp"
                    ></textarea>
                    {/* <p>FrontEnd Developer: &nbsp; 2+ years</p>
                    <p>FullStack Developer: &nbsp; 6+ months</p> */}
                  </div>
                </div>
              </div>
              <div className="port-panel port-p6">
                <div className="inner">
                  <div className="content1">
                    <h3>projects</h3>
                    <div className="modal">
                      <button onClick={() => setModalIsOpenProject(true)}>
                        <i className="fas fa-plus"></i>
                      </button>
                      <Modal
                        isOpen={modalIsOpenProject}
                        className="Modal"
                        overlayClassName="Overlay"
                      >
                        <div className="cbtn">
                          <button onClick={() => setModalIsOpenProject(false)}>
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                        <div className="project">
                          <div className="sec0">
                            <h1>Upload Project</h1>
                          </div>
                          <div className="sec1">
                            <div className="sec">
                              <img src={pjpic} alt="" />

                              <label htmlFor="file2">
                                <i className="fas fa-camera"></i>
                              </label>
                              <input
                                id="file2"
                                type="file"
                                className="input"
                                name="projectpic"
                                onChange={primg}
                              />

                              {activeUpload2 === "true" && (
                                <button
                                  id="upload"
                                  onClick={() => {
                                    updatePic2(userData._id);
                                    setLoading2(true);
                                    setTimeout(() => {
                                      setLoading2(false);
                                      setActiveUpload2("false");
                                    }, 2000);
                                  }}
                                >
                                  {loading2 && (
                                    <i className="fas fa-sync fa-spin"></i>
                                  )}
                                  {!loading2 && (
                                    <i className="fas fa-upload"></i>
                                  )}
                                </button>
                              )}
                            </div>
                          </div>
                          <div className="sec2">
                            <input
                              type="text"
                              className="input"
                              name="url"
                              onChange={handleUrl}
                              placeholder="url"
                            />
                            <textarea
                              className="textarea"
                              name="details"
                              onChange={handleDetails}
                              id=""
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                        </div>
                        <div className="abtn">
                          <button onClick={projectForm}>Add</button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <div className="content2">
                    {project.map((item) => {
                      return (
                        <div className="section">
                          <div className="project">
                            <a href={item.url} target="_blank">
                              <img src={item.projectpic} alt="" />
                            </a>

                            <i
                              className="fas fa-trash"
                              onMouseEnter={() => {
                                setProjectId(item._id);
                              }}
                              onClick={() => {
                                delProject();
                                refreshProject();
                              }}
                            ></i>
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

      <ToastContainer position="top-right" />
    </>
  );
};

export default Portfolio;
