import React, { useEffect, useState } from "react";

const Update = () => {
  // const [msg, setMsg] = useState([
  //   {
  //     messages: "",
  //   },
  // ]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    id: "",
  });
  const userUpdate = async () => {
    try {
      const res = await fetch("/userdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      // setMsg(data.messages);
      setUserData({
        ...userData,
        pic: data.pic,
        name: data.name,
        email: data.email,
        phone: data.phone,
        work: data.work,
        id: data._id,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userUpdate();
  }, []);

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // const handleMsg = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUserData({ ...msg, [name]: value });
  // };
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
  //File Update
  const [file, setFile] = useState("");
  const [cvv, setCv] = useState("");
  const updateCv = () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "merndev_cv");
    data.append("cloud_name", "modimanju");
    fetch("https://api.cloudinary.com/v1_1/modimanju/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.secure_url);
        setCv(data.secure_url);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("pic:", cvv);
  };

  //sending data to backend
  const updateForm = (e) => {
    e.preventDefault();
    const { name, email, phone, work, id } = userData;
    const pic = picc;
    const cv = cvv;
    // const messages = msg;
    // const pic = data.url;
    console.log(userData);

    fetch("/edit", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cv,
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

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Update</h1>
      <form method="POST">
        {/* <input
          type="text"
          className="input"
          name="pic"
          value={picc}
          onUpdate={handleInputs}
          placeholder="pic"
        /> */}

        <input
          type="text"
          className="input"
          name="name"
          value={userData.name}
          onChange={handleInputs}
          placeholder="name"
        />
        <input
          type="email"
          className="input"
          name="email"
          value={userData.email}
          onChange={handleInputs}
          placeholder="email"
        />
        <input
          type="phone"
          className="input"
          name="phone"
          value={userData.phone}
          onChange={handleInputs}
          placeholder="phone"
        />

        <input
          type="text"
          className="input"
          name="work"
          value={userData.work}
          onChange={handleInputs}
          placeholder="work"
        />

        <input
          type="submit"
          className="button"
          id="button"
          name="update"
          value="Update"
          onClick={updateForm}
        />
      </form>
      {/* {msg.map((item) => {
        return (
          <input
            type="text"
            className="input"
            name="message"
            value={item.message}
            onChange={handleMsg}
            placeholder="message"
          />
        );
      })} */}
      <input
        type="file"
        className="input"
        name="file"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button
        onClick={() => {
          updatePic(userData._id);
        }}
      >
        upload
      </button>
{/* CV Upload  */}
<br /> <br />
<h3>CV Upload</h3>
      <input
        type="file"
        className="input"
        name="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button
        onClick={() => {
          updateCv(userData._id);
        }}
      >
        upload
      </button>
    </div>
  );
};

export default Update;
