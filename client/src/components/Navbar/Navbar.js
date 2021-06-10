import React, { useEffect, useContext } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { UserContext } from "../../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (!state) {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-house-damage"></i> .Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/search" exact>
              <i className="far fa-address-book"></i> .Search
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/portfolio" exact>
              <i className="far fa-address-book"></i> .Portfolio
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-envelope"></i> .Contact
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/logout" exact>
            <i className="fas fa-sign-out-alt"></i> .Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-house-damage"></i> .Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/search" exact>
              <i className="far fa-address-book"></i> .Search
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio" exact>
            <i className="fas fa-id-badge"></i> .Portfolio
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/signin" exact>
            <i className="fas fa-user"></i> .Signin
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-envelope"></i> .Contact
            </NavLink>
          </li>
        </>
      );
    }
  };
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
            <div className="lft"></div>
            <div className="rgt"></div>
          </div>

          <RenderMenu />
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
