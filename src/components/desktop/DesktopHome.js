import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";
import skilli from "../../imgs/skilli.PNG";

export const DesktopHome = () => {
  return (
    <div className="main-sec">
      <div className="intro-container">
        <div className="intro" aria-label="Site Description">
          <h1> Welcome! Lets get your skincare routine together</h1>
          <p>
            Skin Genie is a tool created to help you perfect your skincare
            routine. After filling out a brief survey, our algorithm will
            suggest you the best product line-up for the job.
          </p>
        </div>
        <div className="img-container">
          <img src={skilli} aria-label="Illustration of Skincare Products" />
        </div>
        <div className="btn-container">
          <Link to="/survey">
            <button className="start-btn" aria-label="Start button">
              Lets get started!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
