import React from "react";
import { Link } from "react-router-dom";
import "../../css/mobile.css";

export const MobileContact = () => {
  return (
    <div className="container">
      <div className="text-section">
        <h3>About: </h3>
        <h5>
          Skin Genie is a project engineered and designed by software developer
          Katy Nichols.
        </h5>
        <p>
          Skin Genie is a service that generates a skin care routine for you
          based on a questionairre. Your answers are processed through our
          recommendation algorithm to pair you up with products that suit your
          skin's needs.
        </p>
        <p>
          The suggested products are merely a suggestion and before using any
          product, you should be certain to check the ingredients and with your
          dermatologist. No products mentioned are sponsored in any way.
        </p>
        <h3>Contact:</h3>
        <p> Developer and designer: katy.manissa@gmail.com</p>
        <p>Illustrator: IG @holly_illustrates</p>
      </div>
    </div>
  );
};
