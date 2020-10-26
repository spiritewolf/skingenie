import React, { useReducer, createContext } from "react";
import SurveyReducer from "./SurveyReducer";
import { resultData } from "./results";
import * as api from "../api/apiconfig";
import axios from "axios";

const initialState = {
  responses: localStorage.getItem("responses"),
  result: "",
  loading: false,
};

export const SurveyContext = createContext(initialState);

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  const getResults = async () => {
    dispatch({
      type: "LOAD_RESULTS",
    });
    try {
      // const res = await axios.get(api.RESULT);
      const result = await resultData(state.responses);
      dispatch({
        type: "GET_RESULTS",
        payload: result,
      });
    } catch (err) {}
  };

  const getResponses = async (input) => {
    const score = JSON.stringify(input);
    console.log(score);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(api.INPUT, score, config);
      // const res = await score;
      // console.log(res);
      dispatch({
        type: "GET_RESPONSE",
        payload: res,
      });
    } catch (err) {
      console.log(err);
    }
    // getResult();
  };

  return (
    <SurveyContext.Provider
      value={{
        responses: state.responses,
        loading: state.loading,
        result: state.result,
        getResponses,
        getResults,
      }}
    >
      {children}
    </SurveyContext.Provider>
  );
};

export const SurveyConsumer = SurveyContext.Consumer;
