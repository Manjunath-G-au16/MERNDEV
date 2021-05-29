import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Search.scss";

const Search = () => {
  const [port, setPort] = useState("");
  const [active, setActive] = useState("");
  const [find, setFind] = useState("");
  const [option, setOption] = useState("");
  const [displayAllUser, setDisplayAllUser] = useState([]);
  const [userData, setUserData] = useState([]);
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
  // const displayPortfolio = () => {};
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
                {active === "second" &&
                <div className="sec">
                  <div className="profile">
                    <div className="content1">
                      <div className="inner">
                        <img
                          src={item.pic}
                          alt=""
                          // onClick={() => {
                          //   setPort(item.name);
                          //   displayPortfolio();
                          // }}
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
                </div> }
                </>
 
              );
            })}

            {active === "First" && (
              <Card
                uimg={userData.pic}
                uname={userData.name}
                uemail={userData.email}
                uphone={userData.phone}
                uwork={userData.work}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
