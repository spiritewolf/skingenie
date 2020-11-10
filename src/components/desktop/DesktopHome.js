import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/App.css";

export const DesktopHome = () => {
  return (
    <div className="main-sec">
      <div className="intro-container">
        <h1>Skin Genie, acheive your ideal skin.</h1>
        <div className="intro" aria-label="Site Description">
          <h2> Lets get your skin care routine together!</h2>
          <p>
            <strong>What it is: </strong>Skin Genie is a tool created to help
            you perfect your skincare routine. No magic, just skincare!
          </p>
          <p>
            <strong>How it works: </strong> We've created a brief questionairre
            for you to fill out. It will assess your skin type, skin concerns,
            and skin goals. Once you've filled that out it is processed through
            our recommendation algorithm to pair you up with the best product
            line-up for the job!
          </p>
          <div className="btn-container">
            <Link to="/survey">
              <button className="start-btn" aria-label="Start button">
                Lets get started!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
