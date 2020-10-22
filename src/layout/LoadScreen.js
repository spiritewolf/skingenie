import React, { useContext, useEffect } from "react";
import { SurveyContext } from "../context/SurveyState";
import { useHistory } from "react-router-dom";

import "../App.css";

export const LoadScreen = () => {
  const { loading, getResults } = useContext(SurveyContext);
  const history = useHistory();
  useEffect(() => {
    getResults();
    setTimeout(() => {
      if (!loading) {
        history.push("/results");
      }
    }, 3000);
  }, [loading, history]);
  return (
    <div className="main-sec">
      <div className="intro">
        <h1>Give us a sec while we create your routine!</h1>
        <div className="loader">Loading...</div>
      </div>
    </div>
  );
};