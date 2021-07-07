import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { SurveyContext } from '../../context/SurveyState';
import { q, options } from '../data/data.js';
import '../../css/Survey.css';

export const DesktopSurvey = () => {
	const { getResponses, addScore, clearScores, scores } = useContext(SurveyContext);
	const [num, setNum] = useState(0);
	const [selection, setSelection] = useState('');
	const [index, setIndex] = useState(0);
	let history = useHistory();

	const handleClick = async () => {
		if (selection) {
			await addScore(selection);
		}

		if (index != options.length - 1) {
			await setIndex(index+1);
		} else {
			setIndex(0);
			await getResponses(scores.join(' '));
			clearScores();
			history.push('/survey/loading');
		}

		setSelection('');
	};

	return (
		<div className="s-main">
			<h1>The Assesment</h1>
			<p>Below we will be asking you a few questions to asses your skin type, previous routines, and skincare goals.</p>

			<div className="s-container">
				<div className="radiogroup">
					<h3>{ options[index].question }</h3>
					<div className="wrapper">
						<input className="state" onChange={(e) => setSelection(options[index].a.score)} type="radio" id="a" checked={selection === options[index].a.score} aria-label="Option A" />
						<label className="label" htmlFor="a">
							<div className="indicator"></div>
							<span className="text">{options[index].a.text}</span>
						</label>
					</div>
					<div className="wrapper">
						<input className="state" onChange={(e) => setSelection(options[index].b.score)} type="radio" id="b" checked={selection === options[index].b.score} aria-label="Option B" />
						<label className="label" htmlFor="b">
							<div className="indicator"></div>
							<span className="text">{options[index].b.text}</span>
						</label>
					</div>
					<div className="wrapper">
						<input className="state" onChange={(e) => setSelection(options[index].c.score)} type="radio" id="c" checked={selection === options[index].c.score} aria-label="Option C"/>
						<label className="label" htmlFor="c">
							<div className="indicator"></div>
							<span className="text">{options[index].c.text}</span>
						</label>
					</div>
					<div className="wrapper">
						<input className="state" onChange={(e) => setSelection(options[index].d.score)} type="radio" id="d" checked={selection === options[index].d.score} aria-label="Option D" />
						<label className="label" htmlFor="d">
							<div className="indicator"></div>
							<span className="text">{options[index].d.text}</span>
						</label>
					</div>
				</div>
				<button onClick={() => handleClick()} className="start-btn" aria-label="Next Question Button">Next</button>
			</div>
		</div>
	)

};
