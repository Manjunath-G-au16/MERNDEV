import React from "react";
import "./ContactUs.scss";
import mclose from "../../assets/mclose.png";

const ContactUs = () => {
  return (
    <>
      <div id="contactus">
        <div id="layer"></div>
        <div id="wrap">
          <div id="form-wrap">
            <form>
              <div className="text">
                <h1>Contact Us</h1>
              </div>
              <br />
              <br />
              <label htmlFor="email">Your Message:</label>
              <textarea
                name="message"
                id="message"
                value="Your Message"
              ></textarea>

              <label htmlFor="name">Name:</label>
              <input type="text" name="name" value="" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="text" name="email" value="" id="email" />

              <input type="submit" name="submit" value="SEND" />
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
