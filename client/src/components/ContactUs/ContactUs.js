import React, { useEffect, useState } from "react";
import "./ContactUs.scss";
import mclose from "../../assets/mclose.png";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
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
  useEffect(() => {
    userContact();
  }, []);

  //Storing data in states
  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //sending data to backend
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    console.log(userData);
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("Message not sent");
    } else {
      alert("Message sent");
      setUserData({ ...userData, message: "" });
    }
  };
  return (
    <>
      <div id="contactus">
      <br />
        <div id="layer"></div>
        <div id="wrap">
          <div id="form-wrap">
            <form method="post">
              <div className="text">
                <h1>Contact Us</h1>
                
            {/* <button onClick={contactForm}>send</button> */}
              </div>
              <br />
              <br />

              <textarea
                className="textarea"
                name="message"
                value={userData.message}
                onChange={handleInputs}
                id=""
                cols="30"
                rows="10"
              ></textarea>
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
                type="submit"
                className="button"
                id="button"
                name="signup"
                value="SEND"
                onClick={contactForm}
              />
            </form>
            
            <div className="img-Box">
              <img src={mclose} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
