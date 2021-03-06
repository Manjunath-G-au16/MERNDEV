import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
function About() {
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
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Profile</h1>
      <form method="GET">
        <img src={userData.pic} alt="" />
        <p>
          Name: <span>{userData.name}</span>
        </p>
        <p>
          Email: <span>{userData.email}</span>
        </p>
        <p>
          Phone: <span>{userData.phone}</span>
        </p>
        <p>
          Work: <span>{userData.work}</span>
        </p>
      </form>
      <br />
      skills: <br />
      {skill.map((item) => {
        return (
          <h4>
            {item.skill}: <progress id="bar" value={item.value} max="10"></progress>
          </h4>
        );
      })}
      <br />
      <br />
      {project.map((item) => {
        return (
          <p>
            <br />
            project: <br />
            Details: <h4>{item.details}</h4>
            <a href={item.url} target="_blank">
              <img src={item.projectpic} alt="" />
            </a>
          </p>
        );
      })}
      <br />
      <br />
      socials: <br />
      {social.map((item) => {
        return (
          <p>
            <h1>
              <a href={item.link} target="_blank">
                <i class={item.media}></i>
              </a>
            </h1>
          </p>
        );
      })}
      <button
        onClick={() => {
          updateWork(userData._id);
        }}
      >
        Update
      </button>
    </div>
  );
}

export default About;
