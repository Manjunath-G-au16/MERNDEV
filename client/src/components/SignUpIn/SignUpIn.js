import React from "react";
import "./SignUpIn.scss";

const SignUpIn = () => {

  const activeSignUp = () => {
    document.getElementById("sinup-con").classList.add("right-panel-active");
  };

  const activeSignIn = () => {
    document.getElementById("sinup-con").classList.remove("right-panel-active");
  };
  return (
    <><div id="signinup">
      <div class="container" id="sinup-con">
        <div class="form-container sign-up-container">
            <div id="layer"></div>
          <form action="#">
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button >Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
            <div id="layer"></div>
          <form action="#">
            <h1>Sign in</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button >Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
            <div id="olayer"></div>
            <div id="layer"></div>
              <h1>Welcome Back!</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <button class="ghost" id="signIn" onClick={activeSignIn}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
            <div id="olayer"></div>
            <div id="layer"></div>
              <h1>Hello, Dev![]</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
              <button class="ghost" id="signUp" onClick={activeSignUp}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div></div>
    </>
  );
};

export default SignUpIn;
