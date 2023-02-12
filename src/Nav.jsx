import React, { useEffect, useState } from "react";
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
          src="./images/netflix-logo.png"
          alt="netflix logo"
          className="nav_logo"
        />
        <img src="./images/netflix-avatar.png" alt="" className="nav_avatar" />
      </div>
    </div>
  );
};
export default Nav;
