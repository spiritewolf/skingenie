import React, { useReducer, createContext } from "react";
import SurveyReducer from "./SurveyReducer";
import { resultData } from "./results";

const initialState = {
  responses: localStorage.getItem("responses"),
  result: "",
  loading: false,
};

export const SurveyContext = createContext(initialState);

export const SurveyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SurveyReducer, initialState);

  const getResponses = async (score) => {
    const res = await score;
    console.log(res);
    localStorage.setItem("responses", res);
    dispatch({
      type: "GET_RESPONSE",
      payload: res,
    });
    // getResult();
  };
  const getResults = async () => {
    dispatch({
      type: "LOAD_RESULTS",
    });
    const result = await resultData(state.responses);
    dispatch({
      type: "GET_RESULTS",
      payload: result,
    });
    try {
    } catch (err) {}
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
