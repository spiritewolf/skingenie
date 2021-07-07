import React, { useState, useContext, useEffect } from 'react';
import { SurveyContext } from '../../context/SurveyState';
import { useHistory } from 'react-router-dom';
import '../../css/App.css';

export const DesktopResult = () => {
  const { getResults, result, cleanser, serum, moisturizer, sunscreen } = useContext(SurveyContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getResults();
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  const loadResults = async () => {
	  await getResults();
  }

  return (
    <div className="r-sec">
      {result ? (
		  <div className="intro">
			<h1>Your results are in!</h1>
			<p>
			  Keep in mind, any products mentioned are only recommendations. Be
			  sure to check the ingredients and check with your dermatologist to
			  ensure they will work for you!
			</p>
			<div className="r-main">
			  <div className="r-container" aria-label="Cleanser recommendation">
				<h3>Cleanser:</h3>
				<p>{cleanser[0]}</p>
				<p>{cleanser[1]}</p>
			  </div>
			  <div className="r-container" aria-label="Serum recommendation">
				<h3>Serum:</h3>
				<p>{serum[0]}</p>
				<p>{serum[1]}</p>
			  </div>
			  <div
				className="r-container"
				aria-label="Moisturizer recommendation"
			  >
				<h3>Moisturizer:</h3>
				<p>{moisturizer[0]}</p>
				<p>{moisturizer[1]}</p>
			  </div>
			  <div className="r-container" aria-label="Sunscreen recommendation">
				<h3>Sunscreen:</h3>
				<p>{sunscreen[0]}</p>
				<p>{sunscreen[1]}</p>
			  </div>
			</div>
		  </div>
      ) : (
		  <h1> Uh oh! We're having trouble finding your results. Try back later! </h1>
      )}
    </div>
  );
};
