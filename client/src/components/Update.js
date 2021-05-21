import React, { useEffect, useState } from "react";

const Update = () => {
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
      setUserData({
        ...userData,
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

  //sending data to backend
  const updateForm = (e) => {
    e.preventDefault();
    const { name, email, phone, work, id } = userData;
    console.log(userData);

    fetch("/edit", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        id,
      })
    }
    );

  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>Update</h1>
      <form method="POST">
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
    </div>
  );
};

export default Update;
