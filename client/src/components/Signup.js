import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  // const [image, setImage] = useState("");
  // const postDetails = () => {
  //   const data = new FormData();
  //   data.append("file", image);
  //   data.append("upload_preset", "merndev");
  //   data.append("cloud_name", "modimanju");
  //   fetch("https://api.cloudinary.com/v1_1/modimanju/image/upload", {
  //     method: "post",
  //     body: data,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Success");
      console.log("Registration Success");
    }
    history.push("/signin");
  };

  return (
    <div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <h1>Signup</h1>
        <form method="post">
          <input
            type="text"
            className="input"
            name="name"
            value={user.name}
            onChange={handleInputs}
            placeholder="name"
          />
          <input
            type="email"
            className="input"
            name="email"
            value={user.email}
            onChange={handleInputs}
            placeholder="email"
          />
          <input
            type="phone"
            className="input"
            name="phone"
            value={user.phone}
            onChange={handleInputs}
            placeholder="phone"
          />
          <input
            type="text"
            className="input"
            name="work"
            value={user.work}
            onChange={handleInputs}
            placeholder="work"
          />
          <input
            type="password"
            className="input"
            name="password"
            value={user.password}
            onChange={handleInputs}
            placeholder="password"
          />
          <input
            type="password"
            className="input"
            name="cpassword"
            value={user.cpassword}
            onChange={handleInputs}
            placeholder="cpassword"
          />

        
          <input
            type="submit"
            className="button"
            id="button"
            name="signup"
            value="Sign Up"
            onClick={postData}
          />
        </form>
{/*         
        <input
            type="file"
            className="input"
            name="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button onClick={() => postDetails()}>upload</button> */}
      </div>
    </div>
  );
};

export default Signup;
