import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export const Header = () => {
  return (
    <>
      <header>
        <Link className="header-link" to="/">
          <h1>Skin Genie</h1>
        </Link>
        <nav>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <ul className="menuItems">
            <li>
              <Link className="nav-link" to="/">
                <p className="nav-item" data-item="Home">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/survey">
                <p className="nav-item" data-item="Questionairre">
                  Questionairre
                </p>
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/contact">
                <p className="nav-item" data-item="Contact">
                  Contact
                </p>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
