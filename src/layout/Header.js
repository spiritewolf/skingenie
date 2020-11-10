import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export const Header = () => {
  return (
    <div className="nav-container">
      <header className="nav-bar">
        <Link className="header-link" to="/">
          <h1>Skin Genie</h1>
        </Link>
      </header>
      <input id="toggle" type="checkbox" />

      <label className="toggle-container" htmlFor="toggle">
        <span className="button button-toggle"></span>
      </label>

      <nav className="nav">
        <Link className="nav-item" to="/">
          <p className="nav-item">Home</p>
        </Link>
        <Link className="nav-item" to="/survey">
          <p className="nav-item">Questionairre</p>
        </Link>
        <Link className="nav-item" to="/contact">
          <p className="nav-item">Contact</p>
        </Link>
      </nav>
      <section className="dummy-content">
        <div className="circle"></div>
        <div className="text">
          <span></span>
          <span></span>
        </div>
        <div className="square-top"></div>
        <div className="square-behind"></div>
      </section>
    </div>
  );
};
