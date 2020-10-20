import React from "react";
import "../css/Header.css";

export const Header = () => {
  return (
    <>
      <header>
        <h1>Skin Genie</h1>
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="menuItems">
            <li>
              <a className="nav-item" data-item="Home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-item" data-item="About">
                About
              </a>
            </li>
            <li>
              <a className="nav-item" data-item="Contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
