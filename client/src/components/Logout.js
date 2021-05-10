import React, { useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const callLogout = async () => {
    try {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      dispatch({ type: "USER", payload: true });
      history.push("/signin", { replace: true });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    callLogout();
  }, []);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Logout</h1>
    </div>
  );
};

export default Logout;
