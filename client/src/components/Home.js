import React, { useEffect, useState } from "react";
import Hero from "./Hero/Hero.js";

const Home = () => {
  const [userNameData, setUserNameData] = useState("");
  const [show, setShow] = useState(false);
  const userName = async () => {
    try {
      const res = await fetch("/userdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setUserNameData(data.name);
      setShow(true);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userName();
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      {/* <h1>Welcome,</h1>
      <h1>console.log("{userNameData}");</h1>
      <h2>
        {show ? "You are onBoard() ,${Developer}" : "We are ${Developers}"}
      </h2>
      <br /> */}
      <Hero />
    </div>
  );
};

export default Home;
