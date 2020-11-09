import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SurveyContext } from "../../context/SurveyState";
import { q, option } from "../data/data.js";
import "../../css/mobile.css";

export const MobileSurvey = () => {
  const { getResponses } = useContext(SurveyContext);
  const [num, setNum] = useState(0);
  const [question, setQuestion] = useState(q);
  const [selection, setSelection] = useState("");
  const [score, setScore] = useState([]);
  let history = useHistory();

  const handleClick = (e) => {
    //if selection is empty, notify the user to choose an option
    if (!selection) {
      e.preventDefault();
      alert("Please select an option");
    } else if (num == 5) {
      // if all 5 questions answered, set num to 0 to prevent error on reload
      //join score into a string and launch the load screen
      setNum(0);
      getResponses(score.join(" "));
      history.push("/survey/loading");
    } else {
      //else increment the number for next question
      //set the score by determining that the score isn't null
      setNum(num + 1);
      const s = option[num][selection].score;
      return s == null ? null : setScore([...score, s]);
    }
  };

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div className="survey">
      <div className="text-section">
        <h1>The Assesment</h1>
        <p>
          Below we will be asking you a few questions to asses your skin type,
          previous routines, and skincare goals.
        </p>
      </div>
      <div className="main-container">
        <div className="m-radio">
          <h3>{question[num]}</h3>
          <div className="m-wrapper">
            <input
              className="state"
              onChange={(e) => handleChange(e)}
              type="radio"
              name="app"
              id="a"
              value="a"
              aria-label="Option A"
            />
            <label className="label" htmlFor="a">
              <span className="text">{option[num].a.text}</span>
            </label>
          </div>
          <div className="m-wrapper">
            <input
              className="state"
              onChange={(e) => handleChange(e)}
              type="radio"
              name="app"
              id="b"
              value="b"
              aria-label="Option B"
            />
            <label className="label" htmlFor="b">
              <span className="text">{option[num].b.text}</span>
            </label>
          </div>
          <div className="m-wrapper">
            <input
              className="state"
              onChange={(e) => handleChange(e)}
              type="radio"
              name="app"
              id="c"
              value="c"
              aria-label="Option C"
            />
            <label className="label" htmlFor="c">
              <span className="text">{option[num].c.text}</span>
            </label>
          </div>
          <div className="m-wrapper">
            <input
              className="state"
              type="radio"
              onChange={(e) => handleChange(e)}
              name="app"
              id="d"
              value="d"
              aria-label="Option D"
            />
            <label className="label" htmlFor="d">
              <span className="text">{option[num].d.text}</span>
            </label>
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="start-btn surv"
            aria-label="Next Question Button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
