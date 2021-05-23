import React, { useEffect, useState } from "react";

const Contact = () => {
  const [find, setFind] = useState("");
  const [option, setOption] = useState("");
  const [displayAllUser, setDisplayAllUser] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleInputs = (e) => {
    setFind(e.target.value);
  };
  const userContact = async () => {
    console.log("clicked");
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
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
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
  useEffect(() => {}, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Contact</h1>
      name: {userData.name}
      <br />
      email: {userData.email}
      <br />
      phone: {userData.phone}
      <br />
      <input
        type="text"
        className="input"
        name="name"
        onChange={handleInputs}
        placeholder="name"
      />
      <button onClick={userContact}>Find</button>
      <select onChange={handleOption}>
        <option value="modimanju">Modimanju</option>
        <option value="abc">Abc</option>
        <option value="test3">Test3</option>
      </select>
      <button onClick={displayUser}>Select</button>
      {displayAllUser.map((item) => {
        return (
          <div>
            <span>Name: {item.name}</span>
            <br />
            <span>Email: {item.email}</span>
            <br />
            <span>Phone: {item.phone}</span>
            <br />
            <span>Work: {item.work}</span>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Contact;
