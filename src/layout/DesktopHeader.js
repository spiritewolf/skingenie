import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export const DesktopHeader = () => {
  return (
    <>
      <header className="h-container">
        <Link className="header-link" to="/">
          <h1>Skin Genie</h1>
        </Link>
        <nav>
          <ul className="menu-items">
            <li>
              <Link className="h-link" to="/">
                <p className="h-item" data-item="Home">
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link className="h-link" to="/survey">
                <p className="h-item" data-item="Questionairre">
                  Questionairre
                </p>
              </Link>
            </li>
            <li>
              <Link className="h-link" to="/contact">
                <p className="h-item" data-item="Contact">
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
