import React, { useState, useContext, useEffect } from "react";
import { SurveyContext } from "../../context/SurveyState";
import { useHistory } from "react-router-dom";
import "../../css/mobile.css";

export const MobileResult = () => {
  const {
    getResults,
    result,
    cleanser,
    serum,
    moisturizer,
    sunscreen,
  } = useContext(SurveyContext);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getResults();
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className="container">
      {!result ? (
        <h1>
          Uh oh! We're having trouble finding your results. Try back later!
        </h1>
      ) : (
        <>
          <div className="text-section">
            <h1>Your results are in!</h1>
            <p>
              Keep in mind, any products mentioned are only recommendations. Be
              sure to check the ingredients and check with your dermatologist to
              ensure they will work for you!
            </p>
          </div>
          <div className="main-container">
            <div className="result">
              <h3>Cleanser:</h3>
              <div className="result-c">
                <p>{cleanser[0]}</p>
                <p>{cleanser[1]}</p>
              </div>
              <h3>Serum:</h3>
              <div className="result-c">
                <p>{serum[0]}</p>
                <p>{serum[1]}</p>
              </div>
              <h3>Moisturizer:</h3>
              <div className="result-c">
                <p>{moisturizer[0]}</p>
                <p>{moisturizer[1]}</p>
              </div>
              <h3>Sunscreen:</h3>
              <div className="result-c">
                <p>{sunscreen[0]}</p>
                <p>{sunscreen[1]}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
