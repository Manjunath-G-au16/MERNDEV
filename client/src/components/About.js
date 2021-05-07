import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
function About() {
  const history = useHistory();
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
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/signin");
    }
  };
  useEffect(() => {
    callAboutPage();
  });
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1>About</h1>
      <form method="GET">
        <input
          type="email"
          className="input"
          name="email"
          placeholder="email"
        />
      </form>
    </div>
  );
}

export default About;
