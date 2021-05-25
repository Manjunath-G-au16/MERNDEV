import React, { useEffect, useState } from "react";

const Project = () => {
  const [userData, setUserData] = useState("");
  const [social, setSocial] = useState("");
  const [slink, setSLink] = useState("");
  const [sskill, setSSkill] = useState("");
  const [svalue, setSValue] = useState("");

  useEffect(() => {}, []);

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSocial = (e) => {
    setSocial(e.target.value);
  };
  const handleLink = (e) => {
    setSLink(e.target.value);
  };
  const handleSkill = (e) => {
    setSSkill(e.target.value);
  };
  const handleValue = (e) => {
    setSValue(e.target.value);
  };
  //Pic Update
  const [image, setImage] = useState("");
  const [picc, setPic] = useState("");
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
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("pic:", picc);
  };

  //sending data to backend
  const projectForm = async (e) => {
    e.preventDefault();
    const { url, details } = userData;
    const projectpic = picc;
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
    if (!data) {
      console.log("Project not sent");
    } else {
      alert("Project sent");
    }
  };
  //sending data to backend
  const addSocial = async (e) => {
    e.preventDefault();
    const media = social;
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
    if (!data) {
      console.log("Socials not sent");
    } else {
      alert("Socials sent");
    }
  };
  //sending data to backend
  const addSkill = async (e) => {
    e.preventDefault();
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

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Projects</h1>
      <form method="POST">
        <input
          type="text"
          className="input"
          name="url"
          onChange={handleInputs}
          placeholder="url"
        />
        <textarea
          className="textarea"
          name="details"
          onChange={handleInputs}
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          type="submit"
          className="button"
          id="button"
          name="save"
          value="Save"
          onClick={projectForm}
        />
      </form>
      <input
        type="file"
        className="input"
        name="projectpic"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={updatePic}>upload</button>

      <br />
      <br />
      <h1>Socials</h1>
      <select onChange={handleSocial}>
        <option value="fab fa-linkedin">Linkedin</option>
        <option value="fab fa-github-square">Github</option>
        <option value="fab fa-codepen">Codepen</option>
        <option value="fab fa-facebook-square">Facebook</option>
        <option value="fab fa-instagram-square">Instagram</option>
      </select>
      <input
        type="text"
        className="input"
        name="link"
        onChange={handleLink}
        placeholder="link"
      />
      <button onClick={addSocial}>Add</button>
      <br />
      <br />
      {/* Skills section  */}
      <h1>Skills</h1>
      <input
        type="text"
        className="input"
        name="skill"
        onChange={handleSkill}
        placeholder="skill"
      />
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
      
      <button onClick={addSkill}>Add</button>
    </div>
  );
};

export default Project;
