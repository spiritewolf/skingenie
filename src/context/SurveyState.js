import React, { useReducer, createContext } from "react";
import SurveyReducer from "./SurveyReducer";
import { resultData } from "./results";
import * as api from "../api/apiconfig";
import axios from "axios";

const initialState = {
  responses: "",
  result: "",
  cleanser: "",
  serum: "",
  moisturizer: "",
  sunscreen: "",
  loading: false,
};

export const SurveyContext = createContext(initialState);

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  const getResults = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(api.RESULT, config);
      dispatch({
        type: "GET_RESULTS",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getResponses = async (input) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const score = JSON.stringify(input);
      const res = await axios.post(api.INPUT, score, config);
      dispatch({
        type: "GET_RESPONSE",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SurveyContext.Provider
      value={{
        responses: state.responses,
        loading: state.loading,
        result: state.result,
        cleanser: state.cleanser,
        serum: state.serum,
        moisturizer: state.moisturizer,
        sunscreen: state.sunscreen,
        getResponses,
        getResults,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const SurveyConsumer = SurveyContext.Consumer;
