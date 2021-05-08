import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({});
  const userContact = async () => {
    try {
      const res = await fetch("/userdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
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
  useEffect(() => {
    userContact();
  },[]);
  return (
    <div>
    <br />
    <br />
    <br />
    <br />
    <h1>Contact</h1>
    <form method="GET">
    <p>Name: <span>{userData.name}</span></p>
    <p>Email: <span>{userData.email}</span></p>
    <p>Phone: <span>{userData.phone}</span></p>
    </form>
  </div>

  )
}

export default Contact
