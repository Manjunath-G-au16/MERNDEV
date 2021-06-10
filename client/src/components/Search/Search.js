import React, { useEffect, useState } from "react";
import Card from "../Common/Card";
import "./Search.scss";
import "../Protfolio/Portfolio.scss";
import PortfolioCard from "../Common/PortfolioCard";

const Search = () => {
  const [port, setPort] = useState("");
  const [active, setActive] = useState("");
  const [find, setFind] = useState("");
  const [option, setOption] = useState("");
  const [displayAllUser, setDisplayAllUser] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userProfile, setUserProfile] = useState({});
  const [project, setProject] = useState([]);
  const [social, setSocial] = useState([]);
  const [skill, setSkill] = useState([]);
  const handleInputs = (e) => {
    setFind(e.target.value);
  };
  const userContact = async () => {
    const name = find;
    try {
      const res = await fetch("/finduser", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await res.json();

      setActive("First");

      console.log(data);
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleOption = (e) => {
    setOption(e.target.value);
  };
  const displayPortfolio = async () => {
    setActive("third");
    console.log("clicked");
    const name = port;
    try {
      const res = await fetch("/xxyyzz", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
        }),
      });
      const data = await res.json();
      console.log(data);
      setUserProfile(data);
      setProject(data.projects);
      setSocial(data.socials);
      setSkill(data.skills);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const displayUser = async () => {
    const category = option;
    try {
      const res = await fetch("/displayuser", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
        }),
      });
      const data = await res.json();

      setActive("second");

      console.log("alluser:", data);
      setDisplayAllUser(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    displayUser();
  }, []);
  return (
    <>
      <br />
      <br />
      <br />

      <div id="srh-main">
        <div id="srh-con">
          <div className="srh-panel srh-p1">
            <div className="sec1"></div>
            <div className="sec2">
              <div className="content1">
                <input
                  type="text"
                  className="input"
                  name="name"
                  onChange={handleInputs}
                  placeholder="name"
                />
              </div>
              <div className="content2">
                <button onClick={userContact}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="sec3">
              <div className="content1">
                <select onChange={handleOption}>
                  <option value="">Categories</option>
                  <option value="FrontEnd Developer">FrontEnd Developer</option>
                  <option value="BackEnd Developer">BackEnd Developer</option>
                  <option value="FullStack Developer">FullStack Developer</option>
                  <option value="UI">UI/UX</option>
                </select>
              </div>
              <div className="content2">
                <button onClick={displayUser}>
                  <i className="far fa-check-circle"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="srh-panel srh-p2">
            {displayAllUser.map((item) => {
              return (
                <>
                  {active === "second" && (
                    <div className="sec">
                      <div className="profile">
                        <div className="content1">
                          <div className="inner">
                            <img
                              src={item.pic}
                              alt=""
                              onMouseEnter={() => {
                                setPort(item._id)
                              }}
                              // onClick={() => {
                              //   displayPortfolio();
                              //   setPort(item._id);
                              // }}
                              onClick={displayPortfolio}
                            />
                          </div>
                        </div>
                        <div className="content2">
                        <div className="inner">
                        <div className="content">
                          <h5>{item.name}</h5>
                          <h5>{item.phone}</h5>
                          <h5>{item.email}</h5>
                          <h5>{item.work}</h5>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              );
            })}

            {active === "First" && (
              <Card
                img={userData.pic}
                name={userData.name}
                email={userData.email}
                phone={userData.phone}
                work={userData.work}
                onMouseEnter={() => {
                  setPort(userData._id);
                }}
                onClick={() => {
                  displayPortfolio((userData._id))
                }}
              />
            )}
          </div>
          <div className="srh-panel srh-p3">
            {active == "third" && (
              <PortfolioCard
                pic={userProfile.pic}
                name={userProfile.name}
                work={userProfile.work}
                email={userProfile.email}
                phone={userProfile.phone}
                about={userProfile.about}
                exp={userProfile.exp}
                social={social}
                skill={skill}
                project={project}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
