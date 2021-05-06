import React, { useEffect } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import $ from "jquery";

const Navbar = () => {
  function animation() {
    var tabsNewAnim = $("#navbarContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    $("#navbarContent").on("click", "li", function (e) {
      $("#navbarContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px",
      });
    });
  }

  useEffect(() => {
    animation();
    $(window).on("resize", function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, []);

  return (
    <nav className="navbar">
      <div id="navbarContent">
        <ul>
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/" exact>
            <i className="fas fa-house-damage"></i> Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" exact>
              <i className="far fa-address-book"></i> About
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/signin" exact>
              <i className="far fa-clone"></i> Signin
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/signup" exact>
              <i className="far fa-chart-bar"></i> Signup
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-copy"></i> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
