import React, { useEffect, useState } from "react";
import netflix_logo from "./images/netflix-logo.png";
import netflix_avatar from "./images/netflix-avatar.png";
import "./Nav.css";
const Nav = () => {
  const [show, setShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          src={netflix_logo}
          alt="netflix logo"
          className="nav_logo"
        />
        <img src={netflix_avatar} alt="" className="nav_avatar" />
      </div>
    </div>
  );
};
export default Nav;
