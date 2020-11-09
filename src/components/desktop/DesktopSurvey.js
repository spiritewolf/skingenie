import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { SurveyContext } from "../../context/SurveyState";
import { q, option } from "../data/data.js";
import "../../css/Survey.css";

export const DesktopSurvey = () => {
  const { getResponses } = useContext(SurveyContext);
  const [num, setNum] = useState(0);
  const [question, setQuestion] = useState(q);
  const [selection, setSelection] = useState("");
  const [score, setScore] = useState([]);
  let history = useHistory();

  const handleClick = (e) => {
    if (num == 5) {
      setNum(0);
      getResponses(score.join(" "));
      history.push("/survey/loading");
    } else {
      setNum(num + 1);
      const s = option[num][selection].score;
      return s == null ? null : setScore([...score, s]);
    }
  };

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div className="s-main">
      <h1>The Assesment</h1>
      <p>
        Below we will be asking you a few questions to asses your skin type,
        previous routines, and skincare goals.
      </p>
      <div className="s-container">
        <div className="radiogroup">
          <h3>{question[num]}</h3>
          <div className="wrapper">
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
              <div className="indicator"></div>
              <span className="text">{option[num].a.text}</span>
            </label>
          </div>
          <div className="wrapper">
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
              <div className="indicator"></div>
              <span className="text">{option[num].b.text}</span>
            </label>
          </div>
          <div className="wrapper">
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
              <div className="indicator"></div>
              <span className="text">{option[num].c.text}</span>
            </label>
          </div>
          <div className="wrapper">
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
              <div className="indicator"></div>
              <span className="text">{option[num].d.text}</span>
            </label>
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="start-btn"
            aria-label="Next Question Button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
