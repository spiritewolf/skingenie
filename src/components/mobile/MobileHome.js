import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/mobile.css";

export const MobileHome = () => {
  return (
    <div className="container">
      <div className="main-container">
        <div className="text-section" aria-label="Site Description">
          <h1> Welcome! Lets get your skincare routine together</h1>
          <p>
            Skin Genie is a tool created to help you perfect your skincare
            routine. After filling out a brief survey, our algorithm will
            suggest you the best product line-up for the job.
          </p>
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
