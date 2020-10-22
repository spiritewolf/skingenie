import React, { useContext, useEffect } from "react";
import { SurveyContext } from "../context/SurveyState";
import { useHistory } from "react-router-dom";

import "../App.css";

export const Result = () => {
  const { result, getResults } = useContext(SurveyContext);
  const history = useHistory();
  useEffect(() => {
    getResults();
  }, []);
  return (
    <div className="r-sec">
      {!result ? (
        <h1>
          Uh oh! We're having trouble finding your results. Try back later!
        </h1>
      ) : (
        <div className="intro">
          <h1>Your results are in!</h1>
          <p>
            Keep in mind, any products mentioned are only recommendations. Be
            sure to check the ingredients and check with your dermatologist to
            ensure they will work for you!
          </p>
          <div className="r-main">
            <div className="r-container">
              <h3>Cleanser:</h3>
              <p>{result.cleanser}</p>
            </div>
            <div className="r-container">
              <h3>Serum:</h3>
              <p>{result.serum}</p>
            </div>
            <div className="r-container">
              <h3>Moisturizer:</h3>
              <p>{result.moisturizer}</p>
            </div>
            <div className="r-container">
              <h3>Sunscreen:</h3>
              <p>{result.sunscreen}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
