import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../css/Survey.css";

export const Survey = () => {
  const [selection, setSelection] = useState("");
  const labels = {
    acne: "acne",
    aging: "aging",
    texture: "texture",
    none: "none",
  };

  console.log(selection);

  return (
    <div className="container">
      <h1>The Assesment</h1>
      <p>
        Below we will be asking you a few questions to asses your skin type,
        previous routines, and skincare goals.
      </p>
      <p>Be sure to answer as thoroughly as possible</p>
      <div className="radiogroup">
        <p>What is your number one skincare concern?</p>
        <div className="wrapper">
          <input
            className="state"
            onChange={(e) => setSelection(e.target.value)}
            type="radio"
            name="app"
            id="a"
            value={labels.acne}
          />
          <label className="label" htmlFor="a">
            <div className="indicator"></div>
            <span className="text">Acne/blemishes</span>
          </label>
        </div>
        <div className="wrapper">
          <input
            className="state"
            onChange={(e) => setSelection(e.target.value)}
            type="radio"
            name="app"
            id="b"
            value={labels.aging}
          />
          <label className="label" htmlFor="b">
            <div className="indicator"></div>
            <span className="text">Anti-aging</span>
          </label>
        </div>
        <div className="wrapper">
          <input
            className="state"
            onChange={(e) => setSelection(e.target.value)}
            onChange={(e) => setSelection(e.target.value)}
            type="radio"
            name="app"
            id="c"
            value={labels.texture}
          />
          <label className="label" htmlFor="c">
            <div className="indicator"></div>
            <span className="text">Texture/dullness/appearance</span>
          </label>
        </div>
        <div className="wrapper">
          <input
            className="state"
            type="radio"
            onChange={(e) => setSelection(e.target.value)}
            name="app"
            id="d"
            value={labels.none}
          />
          <label className="label" htmlFor="d">
            <div className="indicator"></div>
            <span className="text">None of the above</span>
          </label>
        </div>
      </div>
    </div>
  );
};
