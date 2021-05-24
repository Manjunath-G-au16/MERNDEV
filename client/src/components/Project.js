import React, { useEffect, useState } from "react";

const Project = () => {
    const [userData, setUserData] = useState("")

  useEffect(() => {
  }, []);

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData,[name]: value });
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
    const {  url, details } = userData;
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

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Project</h1>
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
      <button
        onClick={updatePic}
      >
        upload
      </button>
    </div>
  );
};

export default Project;