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
      {active == "third" && (
        <PortfolioCard
          pic={userProfile.pic}
          name={userProfile.name}
          work={userProfile.work}
          email={userProfile.email}
          phone={userProfile.phone}
          social={social}
          skill={skill}
          project={project}
        />
      )}
      <div id="srh-main">
        <div id="srh-con">
          <div className="srh-panel srh-p1">
            <div className="sec1"></div>
            <div className="sec2">
              <input
                type="text"
                className="input"
                name="name"
                onChange={handleInputs}
                placeholder="name"
              />
              <button onClick={userContact}>Find</button>
            </div>
            <div className="sec3">
              <select onChange={handleOption}>
                <option value="">Categories</option>
                <option value="modimanju">Modimanju</option>
                <option value="abc">Abc</option>
                <option value="test3">Test3</option>
              </select>
              <button onClick={displayUser}>Select</button>
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
                              onClick={() => {
                                displayPortfolio();
                                setPort(item.name);
                              }}
                              // onClick={displayPortfolio}
                            />
                          </div>
                        </div>
                        <div className="content2">
                          <h5>{item.name}</h5>
                          <h5>{item.phone}</h5>
                          <h5>{item.email}</h5>
                          <h5>{item.work}</h5>
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
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
