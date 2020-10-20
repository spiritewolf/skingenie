import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "../css/Survey.css";
import { SurveyContext } from "../context/SurveyState";

const q = [
  "What is your age?",
  "What is your number one skin concern?",
  "What is your second most concern?",
  "What type of cleanser do you currently use?",
  "How does your skin currently feel after cleansing and drying it? PS: You can moisturize now!",
  "How would you describe your skins level of irritation?",
  "How much water do you drink each day?",
];
const option = {
  0: { a: "15-20", b: "21-29", c: "30-45", d: "45+" },
  1: {
    a: "Acne/blemishes",
    b: "Anti-aging",
    c: "Texture/dullness/appearance",
    d: "Sun damage",
  },
  2: {
    a: "Acne/blemishes",
    b: "Anti-aging",
    c: "Texture/dullness/appearance",
    d: "Sun damage",
  },
  3: {
    a: "Foaming/Gel",
    b: "Cream",
    c: "Micellar water/oil/water",
    d: "Other/do not cleanse",
  },
  4: {
    a: "Dry and tight",
    b: "Hydrated and calm",
    c: "Irritated but not dry",
    d: "Neither dry nor hydrated, no irritation",
  },
  5: {
    a: "Extremely irritated (lots of redness, itching, peeling, etc)",
    b: "Irritated (redness, slightly itchy)",
    c: "Not really irritated (minimal redness)",
    d: "Zero irritation",
  },
  6: {
    a: "1.5+ liters/day",
    b: "6-8 cups/day",
    c: "2-5 cups/day",
    d: "Less than a cup per day",
  },
};

export const Survey = () => {
  const { getResponses } = useContext(SurveyContext);
  const [num, setNum] = useState(0);
  const [question, setQuestion] = useState(q);
  const [selection, setSelection] = useState("");
  const [checked, setChecked] = useState("");
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    if (!selection) {
      alert("Please make a selection");
    } else {
      if (num < 6) {
        setNum(num + 1);
      } else {
        getResponses(selection);
        setNum(0);
        history.push("/app");
      }
    }
  };

  return (
    <div className="container">
      <h1>The Assesment</h1>
      <p>
        Before we get started, we ask that you cleanse and dry your face. Do not
        apply moisturizer, serums, or any products until we've given you the
        okay!
      </p>
      <p>
        Below we will be asking you a few questions to asses your skin type,
        previous routines, and skincare goals.
      </p>
      <p>Be sure to answer as thoroughly as possible</p>
      <div className="s-container">
        <div className="radiogroup">
          <h3>{question[num]}</h3>
          <div className="wrapper">
            <input
              className="state"
              onChange={(e) => setSelection([...selection, e.target.value])}
              type="radio"
              name="app"
              id="a"
              value="a"
            />
            <label className="label" htmlFor="a">
              <div className="indicator"></div>
              <span className="text">{option[num].a}</span>
            </label>
          </div>
          <div className="wrapper">
            <input
              className="state"
              onChange={(e) => setSelection([...selection, e.target.value])}
              type="radio"
              name="app"
              id="b"
              value="b"
            />
            <label className="label" htmlFor="b">
              <div className="indicator"></div>
              <span className="text">{option[num].b}</span>
            </label>
          </div>
          <div className="wrapper">
            <input
              className="state"
              onChange={(e) => setSelection([...selection, e.target.value])}
              type="radio"
              name="app"
              id="c"
              value="c"
            />
            <label className="label" htmlFor="c">
              <div className="indicator"></div>
              <span className="text">{option[num].c}</span>
            </label>
          </div>
          <div className="wrapper">
            <input
              className="state"
              type="radio"
              onChange={(e) => setSelection([...selection, e.target.value])}
              name="app"
              id="d"
              value="d"
            />
            <label className="label" htmlFor="d">
              <div className="indicator"></div>
              <span className="text">{option[num].d}</span>
            </label>
          </div>
          <button onClick={(e) => handleClick(e)} className="start-btn">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
