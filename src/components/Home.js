import React from "react";

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
          <button className="start-btn">Lets get started!</button>
        </div>
      </div>
    </div>
  );
};
