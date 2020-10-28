import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import skilli from "../imgs/skilli.PNG";

export const Home = () => {
  return (
    <div className="main-sec">
      <div className="intro-container">
        <div className="intro">
          <h1> Welcome! Lets get your skincare routine together</h1>
          <p>
            Skin Genie is a tool created to help you perfect your skincare
            routine. After filling out a brief survey, our algorithm will
            suggest you the best product line-up for the job.
          </p>
        </div>
        <div className="btn-container">
          <Link to="/survey">
            <button className="start-btn">Lets get started!</button>
          </Link>
        </div>
      </div>
      <div className="img-container">
        <img src={skilli} />
      </div>
    </div>
  );
};
