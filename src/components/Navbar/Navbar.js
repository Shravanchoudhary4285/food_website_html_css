import React, { useState } from "react";
import "./Navbar.css"
import { assets } from "../../Assets/assets";
import {Link} from "react-router-dom"
function Navbar() {
  const [menu, setmenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />
      <ul className="navbar-menu">
        <Link to="/"
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link >
        <a href="#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => setmenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          mobile-app
        </a>
        <a href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket-icon" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
