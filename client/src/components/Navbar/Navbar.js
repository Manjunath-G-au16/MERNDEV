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
              <i className="fas fa-home"></i> <div id="nav-text">.Home( )</div>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/search" exact>
              <i className="fas fa-search"></i> <div id="nav-text">.Search( )</div>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/portfolio" exact>
              <i className="fas fa-address-card"></i> <div id="nav-text">.Portfolio( )</div>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-envelope"></i> <div id="nav-text">.Contact( )</div>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/logout" exact>
              <i className="fas fa-sign-out-alt"></i> <div id="nav-text">.Logout( )</div>
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item active">
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-home"></i> <div id="nav-text">.Home( )</div>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/search" exact>
              <i className="fas fa-search"></i> <div id="nav-text">.Search( )</div>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/portfolio" exact>
              <i className="fas fa-address-card"></i> <div id="nav-text">.Portfolio( )</div>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink className="nav-link" to="/signin" exact>
              <i className="fas fa-user"></i> <div id="nav-text">.Signin( )</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" exact>
              <i className="far fa-envelope"></i> <div id="nav-text">.Contact( )</div>
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
