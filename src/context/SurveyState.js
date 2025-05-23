import React, { useReducer, createContext } from 'react';
import SurveyReducer from './SurveyReducer';
import * as api from '../api/apiconfig';
import axios from 'axios';

const initialState = {
  scores: null,
  result: '',
  cleanser: '',
  serum: '',
  moisturizer: '',
  sunscreen: '',
};

export const SurveyContext = createContext(initialState);

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  const config = {
	headers: {
	  'Content-Type': 'application/json',
	},
  };

  const getResults = async () => {
    try {
      const res = await axios.get(api.RESULT, config);
	  if (res.data) {
		  dispatch({
            type: 'GET_RESULTS',
            payload: res.data,
          });
	  }
    } catch (e) {
      console.log(e);
	  throw e;
    }
  };

  const getResponses = async (input) => {
    try {
      let score = JSON.stringify(input);
      const res = await axios.post(api.INPUT, score, config);
	  if (res.data) {
		  dispatch({
	        type: 'GET_RESPONSE',
	        payload: res,
	      });
	  }
    } catch (e) {
      console.log(e);
	  throw e;
    }
  };

  const addScore = (score) => {
	  if (score) {
		  dispatch({
			  type: 'ADD_SCORE',
			  payload: score
		  })
	  }
  }

  const clearScores = () => {
	  dispatch({ type: 'CLEAR_SCORES' });
  }

  return (
    <SurveyContext.Provider
      value={{
        scores: state.scores,
        result: state.result,
        cleanser: state.cleanser,
        serum: state.serum,
        moisturizer: state.moisturizer,
        sunscreen: state.sunscreen,
		addScore,
		clearScores,
        getResponses,
        getResults,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const SurveyConsumer = SurveyContext.Consumer;
