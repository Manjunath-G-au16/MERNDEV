import React, { useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "./SignUpIn.scss";

const SignUpIn = () => {
  const activeSignUp = () => {
    document.getElementById("sinup-con").classList.add("right-panel-active");
  };

  const activeSignIn = () => {
    document.getElementById("sinup-con").classList.remove("right-panel-active");
  };
  //SignUp

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
  ///////////////////////////////////////////////

  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 400 || !data) {
      // window.alert("Invalid Credentials");

      toast.dark("Invalid Credentials!");
      console.log("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: false });
      window.alert("login successful");
      // toast("Wow so easy!");
      console.log("login successful");
      history.push("/");
    }
  };
  return (
    <>
      <div id="signinup">
        <br />
        <br />
        <br />
        <div class="container" id="sinup-con">
          <div class="form-container sign-up-container">
            <div id="layer">
              <form method="post">
                <h1>Create Account</h1>{" "}
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
                <button onClick={postData}>Sign Up</button>
              </form>
            </div>
          </div>
          <div class="form-container sign-in-container">
            <div id="layer">
              <form method="post">
                <h1>Sign in</h1>
                <input
                  type="email"
                  className="input"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                />
                <input
                  type="password"
                  className="input"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                <button onClick={userLogin}>Sign In</button>
              </form>
            </div>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <div id="olayer"></div>
                <div id="layer"></div>
                <h1>Welcome Back!</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button class="ghost" id="signIn" onClick={activeSignIn}>
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <div id="olayer"></div>
                <div id="layer"></div>
                <h1>Hello, Dev![]</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <button class="ghost" id="signUp" onClick={activeSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right"/>
    </>
  );
};

export default SignUpIn;
